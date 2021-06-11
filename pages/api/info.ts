// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { VercelRequest, VercelResponse } from '@vercel/node'
import { getInfobyLanguage } from '../../controller/fs'
import { languages } from '../../domain/model/language'

import metadata from '../../resources/info/meta.json'

export default function (_: VercelRequest, res: VercelResponse) {
    res.json({
        metadata,
        markdown: {
            es: getInfobyLanguage(languages.es),
            en: getInfobyLanguage(languages.en),
        }
    })
}