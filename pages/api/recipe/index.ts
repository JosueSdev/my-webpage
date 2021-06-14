// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Http from 'http'
import { VercelRequest, VercelResponse } from '@vercel/node'

import { getRecipesMetadata } from '../../../controller/fs'

import recipeMetaRes from '../../../resources/recipe/meta.json'

export default function (req: VercelRequest, res: VercelResponse) {
    let status = 200

    if (req.method === "GET") {
        res.json({
            metadata: recipeMetaRes,
            recipes: getRecipesMetadata(),
        })
        return
    } else {
        status = 405
    }

    res.status(status).send(Http.STATUS_CODES[status])
}