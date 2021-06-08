// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import fs from 'fs'
import path from 'path'

import { ILanguage } from '../domain/model/language'
import { IRecipeRes } from '../domain/model/resource'

const recipesDirectory = path.join(process.cwd(), 'resources', 'recipe', 'article')

export type Markdown = string

export function getInfobyLanguage(lang: ILanguage) {
    let infoPath = path.join(process.cwd(), 'resources')
    infoPath = path.join(infoPath, 'info')
    infoPath = path.join(infoPath, `${lang.id}.md`)

    return fs.readFileSync(infoPath, {encoding: 'utf-8'}).toString() as Markdown
}

function getRecipeMeta(slug: string): IRecipeRes | undefined {
    const metaPath = path.join(recipesDirectory, slug, 'meta.json')
    const file = fs.readFileSync(metaPath, {encoding: 'utf-8'})

    if (!file) {
        return undefined
    }

    const recipeMetadata = JSON.parse(file.toString())
    recipeMetadata.slug = slug

    return recipeMetadata
}

function getRecipeBySlug(slug: string): Markdown | undefined {
    const metaPath = path.join(recipesDirectory, slug, 'content.md')
    const file = fs.readFileSync(metaPath, {encoding: 'utf-8'})

    if (!file) {
        return undefined
    }

    return file.toString() as Markdown
}

function getRecipeSlugs(): Array<string>{
    return fs.readdirSync(recipesDirectory)
}

export function getRecipesMetadata() : Array<IRecipeRes> {
    const slugs = getRecipeSlugs()
    const recipes = slugs
        .reduce((accumulator, slug) => {
            const recipe = getRecipeMeta(slug)
            if (recipe) {
                accumulator.push(recipe)
            }
            return accumulator
        }, [] as Array<IRecipeRes>)
        .sort((r1, r2) => (r1.published > r2.published ? -1 : 1))
    
        return recipes
}

export function getRecipeByGrub(slug: string): [Markdown | undefined, IRecipeRes | undefined] {
    const content = getRecipeBySlug(slug)
    const meta = getRecipeMeta(slug)

    return [content, meta]
}