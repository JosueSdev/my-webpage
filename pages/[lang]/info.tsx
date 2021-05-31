// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps, GetStaticPaths } from 'next'
import Info from '../../components/views/info';

import { ILanguage } from "../../domain/model/language";
import { getStaticLangs, getLanguageById } from "../../usecase/languages"

interface Props {
    language: ILanguage,
}

export default function InfoPage({language}: Props) {
    return <Info language={language} />
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

    return {
        props: {
            language,
        }
    }
}