// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import path from 'path'

import { OGImage } from '../../domain/model/openGraph';

import { getRecipeByGrub, getRecipesMetadata, Markdown } from "../../controller/fs"
import { markdownString2React } from "../../controller/remark"

import OpenGraph from '../../components/modules/openGraph';
import RecipeArticle from '../../components/views/recipe/article';

interface Props {
    title: string,
    desc: string,
    canonicalURL: string,
    ogImage: OGImage,
    siteName: string,
    markdown: Markdown,
}

export default function InfoPage({
    title,
    desc,
    canonicalURL,
    ogImage,
    siteName,
    markdown,
}: Props) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
            </Head>
            <OpenGraph
                title={title}
                type='article'
                url={`${canonicalURL}${router.asPath}`}
                image={ogImage}
                description={desc}
                siteName={siteName}
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

    const isDefaultLocale = locale! === defaultLocale
    const canonicalURL = path.join(process.env.VERCEL_URL || '', isDefaultLocale ? '' : locale!)
    const ogImage: OGImage = {
        ...meta.image,
        url: path.join(canonicalURL, meta.image.url)
    }
    const siteName = process.env.SITE_NAME

    return {
        props: {
            title: meta.title,
            desc: meta.description,
            canonicalURL,
            ogImage,
            ...siteName && {siteName},
            markdown,
        }
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