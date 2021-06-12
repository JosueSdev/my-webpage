// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { OGMetadata } from '../../domain/model/openGraph';

import { newOpenGraphMetadata } from '../../usecase/opengraph';

import { getRecipeByGrub, getRecipesMetadata, Markdown } from "../../controller/fs"
import { markdownString2React } from "../../controller/remark"
import { getBaseCanonicalUrl, getCompleteOGImage } from '../../controller/static';

import OpenGraph from '../../components/modules/openGraph';
import RecipeArticle from '../../components/views/recipe/article';

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
            <RecipeArticle>
                {markdownString2React(markdown)}
            </RecipeArticle>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale, params }) => {
    const [markdown, meta] = getRecipeByGrub(params!.article as string)

    if (!markdown || !meta) {
        return {
            notFound: true,
        }
    }

    const canonicalURL = getBaseCanonicalUrl(locale!, defaultLocale!)
    const ogMeta = newOpenGraphMetadata(
        meta.title,
        canonicalURL,
        'article',
        getCompleteOGImage(meta.image, canonicalURL),
        meta.description,
        process.env.SITE_NAME,
        meta.locale
    )

    return {
        props: {
            meta: ogMeta,
            markdown,
        } as Props
    }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    const recipes = getRecipesMetadata()
    const paths = recipes.map(recipe => ({
        params: {
            article: recipe.slug,
        },
        locale: recipe.locale,
    }))
    return {
      paths,
      fallback: false,
    }
}