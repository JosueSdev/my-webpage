// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'

import { IImageResource } from '../domain/model/resource';
import { OGMetadata } from '../domain/model/openGraph';

import { getLocaleField } from "../usecase/language"
import { newOpenGraphMetadata } from '../usecase/opengraph';

import { getBaseCanonicalUrl, getCompleteOGImage } from '../controller/static'

import Home, { IHomeStrings } from "../components/views/home";
import OpenGraph from '../components/modules/openGraph';

import contentRes from '../resources/home/content.json'
import metaRes from '../resources/home/meta.json'
import devLengsRes from '../resources/home/devLangs.json'
import pokemonTeamRes from '../resources/home/pokemonTeam.json'

interface Props {
    meta: OGMetadata,
    content: IHomeStrings,
    devLangs: Array<IImageResource>,
    pokemonTeam: Array<IImageResource>,
}

export default function Index({
    meta,
    content,
    devLangs,
    pokemonTeam,
}: Props) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            <OpenGraph
                title={meta.title}
                url={meta.url}
                type={meta.type}
                image={meta.image}
                description={meta.description}
                siteName={meta.siteName}
                locale={meta.locale}
            />
            <Home
                strings={content}
                langsList={devLangs}
                pokemonList={pokemonTeam}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
    const localMeta = getLocaleField(metaRes, locale!) as typeof metaRes.es
    const canonicalURL = getBaseCanonicalUrl(locale!, defaultLocale!)

    const meta = newOpenGraphMetadata(
        localMeta.title,
        canonicalURL,
        metaRes.ogType,
        getCompleteOGImage(metaRes.ogImage, canonicalURL),
        localMeta.desc,
        process.env.SITE_NAME,
        locale
    )

    return {
        props: {
            meta,
            content: getLocaleField(contentRes, locale!) as typeof contentRes.es,
            devLangs: devLengsRes,
            pokemonTeam: pokemonTeamRes,
        } as Props
    }
}