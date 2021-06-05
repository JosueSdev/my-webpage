// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'
import path from 'path'

import { ILanguage, languages } from "../domain/model/language";

import { getLanguageById } from "../usecase/language"

import contentRes from '../resources/home/content.json'
import metaRes from '../resources/home/meta.json'
import devLengsRes from '../resources/home/devLangs.json'
import pokemonTeamRes from '../resources/home/pokemonTeam.json'

import Home, { IHomeStrings } from "../components/views/home";
import OpenGraph from '../components/modules/openGraph';
import { OGImage } from '../domain/model/openGraph';
import OpenGraphProfile from '../components/modules/openGraph/profile';

interface MetaStrings {
    title: string,
    ogTitle: string,
    ogDesc: string,
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
            </Head>
            <OpenGraph
                title={localMeta.ogTitle}
                url={canonicalURL}
                type={metaRes.ogType}
                image={ogImage}
                description={localMeta.ogDesc}
                siteName={siteName}
            />
            <OpenGraphProfile profile={metaRes.ogProfile} />
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
            canonicalURL,
            ogImage,
            ...siteName && {siteName}
        }
    }
}