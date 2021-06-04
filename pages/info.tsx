// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'

import { ILanguage } from "../domain/model/language";

import { getLanguageById } from "../usecase/language"

import { getInfobyLanguage, Markdown } from "../controller/fs"
import { markdownString2React } from "../controller/remark"

import Info from '../components/views/info';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const language = locale && getLanguageById(locale)

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