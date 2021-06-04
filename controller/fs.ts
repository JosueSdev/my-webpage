// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import fs from 'fs'
import path from 'path'

import { ILanguage } from '../domain/model/language'

export type Markdown = string

export function getInfobyLanguage(lang: ILanguage) {
    let infoPath = path.join(process.cwd(), 'resources')
    infoPath = path.join(infoPath, 'info')
    infoPath = path.join(infoPath, `${lang.id}.md`)

    return fs.readFileSync(infoPath, {encoding: 'utf-8'}).toString() as Markdown
}