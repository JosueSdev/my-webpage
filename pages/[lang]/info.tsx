// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps, GetStaticPaths } from 'next'

import { ILanguage } from "../../domain/model/language";

import { getStaticLangs, getLanguageById } from "../../usecase/languages"

import { getInfobyLanguage, Markdown } from "../../controller/fs"
import { markdownString2React } from "../../controller/remark"

import Info from '../../components/views/info';

interface Props {
    language: ILanguage,
    markdown: Markdown,
}

export default function InfoPage({
    language,
    markdown,
}: Props) {
    return (
        <Info
            language={language}
        >
            {markdownString2React(markdown)}
        </Info>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getStaticLangs()

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const language = params ? getLanguageById(params.lang as string) : undefined

    const markdown = language ?
        getInfobyLanguage(language)
    : undefined

    return {
        props: {
            language,
            markdown,
        }
    }
}