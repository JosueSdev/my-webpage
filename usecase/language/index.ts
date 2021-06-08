// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { languages } from "../../domain/model/language";

export function getLanguageById(id: string) {
    const langs = Object.keys(languages).map(langKey => languages[langKey])
    
    return langs.find(lang => lang.id === id)
}

export const singleLocalePathNames = [
    '/recipe/[article]',
]