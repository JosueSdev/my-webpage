// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { GetStaticProps } from 'next'

import { ILanguage } from "../domain/model/language";
import { getLanguageById } from "../usecase/language"
import Home from "../components/views/home";

export default function Index({ language }: { language: ILanguage}) {
    return <Home language={language} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const language = locale && getLanguageById(locale)

    return {
        props: {
            language,
        }
    }
}