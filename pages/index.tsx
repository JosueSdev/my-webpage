// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'
import path from 'path'

import { ILanguage, languages } from "../domain/model/language";

import { getLanguageById } from "../usecase/language"

import { getBaseCanonicalUrl, getCompleteOGImage } from '../controller/static'

import contentRes from '../resources/home/content.json'
import metaRes from '../resources/home/meta.json'
import devLengsRes from '../resources/home/devLangs.json'
import pokemonTeamRes from '../resources/home/pokemonTeam.json'

import Home, { IHomeStrings } from "../components/views/home";
import OpenGraph from '../components/modules/openGraph';
import { OGImage } from '../domain/model/openGraph';

interface MetaStrings {
    title: string,
    desc: string,
}

interface Props {
    language: ILanguage,
    canonicalURL: string,
    ogImage: OGImage,
    siteName: string,
}

export default function Index({
    language,
    canonicalURL,
    ogImage,
    siteName,
}: Props) {
    let localMeta: MetaStrings = metaRes.es
    let localContent: IHomeStrings = contentRes.es
    if (language.id == languages.en.id) {
        localMeta = metaRes.en
        localContent = contentRes.en
    }

    return (
        <>
            <Head>
                <title>{localMeta.title}</title>
                <meta name="description" content={localMeta.desc} />
            </Head>
            <OpenGraph
                title={localMeta.title}
                url={canonicalURL}
                type={metaRes.ogType}
                image={ogImage}
                description={localMeta.desc}
                siteName={siteName}
                locale={language.id}
            />
            <Home
                strings={localContent}
                langsList={devLengsRes}
                pokemonList={pokemonTeamRes}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
    const language = locale && getLanguageById(locale)

    const canonicalURL = getBaseCanonicalUrl(locale!, defaultLocale!)
    const ogImage: OGImage = getCompleteOGImage(metaRes.ogImage, canonicalURL)
    const siteName = process.env.SITE_NAME

    return {
        props: {
            language,
            canonicalURL,
            ogImage,
            ...siteName && {siteName}
        }
    }
}