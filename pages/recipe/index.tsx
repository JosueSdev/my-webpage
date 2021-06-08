// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ILanguage, languages } from '../../domain/model/language'
import { OGImage } from '../../domain/model/openGraph'
import { IRecipeRes } from '../../domain/model/resource'

import { getLanguageById } from '../../usecase/language'

import { getRecipesMetadata } from '../../controller/fs'
import { getBaseCanonicalUrl, getCompleteOGImage } from '../../controller/static'

import Recipes, { IRecipesStrings } from '../../components/views/recipe'
import OpenGraph from '../../components/modules/openGraph'

import metaRes from '../../resources/recipe/meta.json'
import contentRes from '../../resources/recipe/content.json'

interface MetaStrings {
    title: string,
    desc: string,
}

interface Props {
    language: ILanguage,
    canonicalURL: string,
    ogImage: OGImage,
    siteName: string,
    recipes: Array<IRecipeRes>,
}

export default function RecipesPage({
    language,
    canonicalURL,
    ogImage,
    siteName,
    recipes,
}: Props){
    const router = useRouter()

    let localMeta: MetaStrings = metaRes.es
    let localContent: IRecipesStrings = contentRes.es
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
                url={`${canonicalURL}${router.asPath}`}
                type={metaRes.ogType}
                image={ogImage}
                description={localMeta.desc}
                siteName={siteName}
                locale={language.id}
            />
            <Recipes
                recipes={recipes}
                strings={localContent}
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
            ...siteName && {siteName},
            recipes: getRecipesMetadata(),
        }
    }
}

