// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'
import path from 'path'

import { OGImage } from '../domain/model/openGraph';
import { ILanguage, languages } from "../domain/model/language";

import { getLanguageById } from "../usecase/language"

import { getInfobyLanguage, Markdown } from "../controller/fs"
import { markdownString2React } from "../controller/remark"

import metaRes from '../resources/info/meta.json'

import Info from '../components/views/info';
import OpenGraph from '../components/modules/openGraph';
import OpenGraphProfile from '../components/modules/openGraph/profile';

interface MetaStrings {
    title: string,
    ogTitle: string,
    ogDesc: string,
}

interface Props {
    language: ILanguage,
    markdown: Markdown,
    canonicalURL: string,
    ogImage: OGImage,
    siteName: string,
}

export default function InfoPage({
    language,
    markdown,
    canonicalURL,
    ogImage,
    siteName,
}: Props) {
    let localMeta: MetaStrings = metaRes.es
    if (language.id == languages.en.id) {
        localMeta = metaRes.en
    }

    return (
        <>
            <Head>
                <title>{localMeta.title}</title>
            </Head>
            <OpenGraph
                title={localMeta.ogTitle}
                type={metaRes.ogType}
                url={canonicalURL}
                image={ogImage}
                description={localMeta.ogDesc}
                siteName={siteName}
            />
            <OpenGraphProfile
                profile={{
                    firstName: '',
                    lastName: '',
                    url: canonicalURL,
                }}
            />
            <Info>
                {markdownString2React(markdown)}
            </Info>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
    const language = locale && getLanguageById(locale)

    const markdown = language ?
        getInfobyLanguage(language)
    : undefined

    const isDefaultLocale = locale! === defaultLocale
    const canonicalURL = path.join(process.env.VERCEL_URL || '', isDefaultLocale ? '' : locale!)
    const ogImage: OGImage = {
        ...metaRes.ogImage,
        url: path.join(canonicalURL, metaRes.ogImage.url)
    }
    const siteName = process.env.SITE_NAME

    return {
        props: {
            language,
            markdown,
            canonicalURL,
            ogImage,
            ...siteName && {siteName}
        }
    }
}