// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { OGMetadata } from '../domain/model/openGraph';

import { getLanguageById, getLocaleField } from "../usecase/language"
import { newOpenGraphMetadata } from '../usecase/opengraph';

import { getInfobyLanguage, Markdown } from "../controller/fs"
import { markdownString2React } from "../controller/remark"
import { getBaseCanonicalUrl, getCompleteOGImage } from '../controller/static';

import Info from '../components/views/info';
import OpenGraph from '../components/modules/openGraph';

import metaRes from '../resources/info/meta.json'

interface Props {
    meta: OGMetadata,
    markdown: Markdown,
}

export default function InfoPage({
    meta,
    markdown,
}: Props) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            <OpenGraph
                title={meta.title}
                type={meta.type}
                url={`${meta.url}${router.asPath}`}
                image={meta.image}
                description={meta.description}
                siteName={meta.siteName}
                locale={meta.locale}
            />
            <Info>
                {markdownString2React(markdown)}
            </Info>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
    const language = locale && getLanguageById(locale)
    const localMetadata = getLocaleField(metaRes, locale!) as typeof metaRes.es
    const canonicalURL = getBaseCanonicalUrl(locale!, defaultLocale!)

    const meta = newOpenGraphMetadata(
        localMetadata.title,
        canonicalURL,
        metaRes.ogType,
        getCompleteOGImage(metaRes.ogImage, canonicalURL),
        localMetadata.desc,
        process.env.SITE_NAME,
        locale
    )

    const markdown = language ?
        getInfobyLanguage(language)
    : undefined

    return {
        props: {
            meta,
            markdown,
        } as Props
    }
}