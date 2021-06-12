// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { OGMetadata } from '../../domain/model/openGraph'
import { IRecipeRes } from '../../domain/model/resource'

import { getLocaleField } from '../../usecase/language'
import { newOpenGraphMetadata } from '../../usecase/opengraph'

import { getRecipesMetadata } from '../../controller/fs'
import { getBaseCanonicalUrl, getCompleteOGImage } from '../../controller/static'

import Recipes, { IRecipesStrings } from '../../components/views/recipe'
import OpenGraph from '../../components/modules/openGraph'

import metaRes from '../../resources/recipe/meta.json'
import contentRes from '../../resources/recipe/content.json'


interface Props {
    meta: OGMetadata,
    recipes: Array<IRecipeRes>,
    strings: IRecipesStrings,
}

export default function RecipesPage({
    meta,
    recipes,
    strings,
}: Props){
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>
            <OpenGraph
                title={meta.title}
                url={`${meta.url}${router.asPath}`}
                type={metaRes.ogType}
                image={meta.image}
                description={meta.description}
                siteName={meta.siteName}
                locale={meta.locale}
            />
            <Recipes
                recipes={recipes}
                strings={strings}
            />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }) => {
    const canonicalUrl = getBaseCanonicalUrl(locale!, defaultLocale!)
    const localeMeta = getLocaleField(metaRes, locale!) as typeof metaRes.es

    const meta = newOpenGraphMetadata(
        localeMeta.title,
        canonicalUrl,
        metaRes.ogType,
        getCompleteOGImage(metaRes.ogImage, canonicalUrl),
        localeMeta.desc,
        locale,
        process.env.SITE_NAME,
    )
    
    return {
        props: {
            meta,
            recipes: getRecipesMetadata(),
            strings: getLocaleField(contentRes, locale!) as typeof contentRes.es
        } as Props
    }
}

