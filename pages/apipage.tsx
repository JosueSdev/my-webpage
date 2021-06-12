// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Head from 'next/head'
import { GetStaticProps } from 'next'

import { OGMetadata } from '../domain/model/openGraph'
import { IEndPoint } from '../domain/model/resource'

import { newOpenGraphMetadata } from '../usecase/opengraph'
import { getLocaleField } from '../usecase/language'

import { getBaseCanonicalUrl, getCompleteOGImage } from '../controller/static'
import { getLocalizedEndpoints } from '../controller/apipage'

import ApiView from '../components/views/api'
import OpenGraph from '../components/modules/openGraph'

import metaRes from '../resources/api/meta.json'

interface Props {
    meta: OGMetadata,
    endpoints: Array<IEndPoint>,
}

export default function ApiPage({
    meta,
    endpoints,
}: Props) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            <OpenGraph
                image={meta.image}
                title={meta.title}
                type={meta.type}
                url={meta.url}
                description={meta.description}
                locale={meta.locale}
                siteName={meta.siteName}
            />
            <ApiView
                endpoints={endpoints}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
    const canonicalUrl = getBaseCanonicalUrl(locale!, defaultLocale!)
    const localeMeta = getLocaleField(metaRes, locale!) as typeof metaRes.es

    const ogMeta = newOpenGraphMetadata(
        localeMeta.title,
        canonicalUrl,
        metaRes.ogType,
        getCompleteOGImage(metaRes.ogImage, canonicalUrl),
        localeMeta.desc,
        process.env.SITE_NAME,
        locale,
    )

    return {
        props: {
            meta: ogMeta,
            endpoints: getLocalizedEndpoints(locale!)
        }
    }
}