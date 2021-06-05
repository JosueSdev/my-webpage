// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

export interface ILanguage {
    id: string,
    value: string,
}

export const languages: {[key: string]: ILanguage} = {
    es: {
        id: 'es',
        value: 'Español'
    },
    en: {
        id: 'en',
        value: 'English'
    },
}