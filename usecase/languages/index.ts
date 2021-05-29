// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { ILanguage } from "../../domain/model/language";

const languages: {[key: string]: ILanguage} = {
    spanish: {
        id: 'es',
        value: 'español'
    },
    english: {
        id: 'en',
        value: 'english'
    },
}

export function getStaticLangs() {
    return Object.keys(languages).map(langKey => ({
        params: {
            lang: languages[langKey].id
        },
    }))
}

export function getLanguageById(id: string) {
    const langs = Object.keys(languages).map(langKey => languages[langKey])
    
    return langs.find(lang => lang.id === id)
}

export default languages