// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Http from 'http'
import { VercelRequest, VercelResponse } from '@vercel/node'

import { getRecipeByGrub } from '../../../controller/fs'

export default function (req: VercelRequest, res: VercelResponse) {
    const { article } = req.query
    let status = 200

    if (Array.isArray(article)) {
        status = 400
    }

    const [markdown, metadata] = getRecipeByGrub(article as string)
    if (!markdown || !metadata) {
        status = 404
    } else {
        res.json({
            metadata,
            markdown,
        })
        return
    }

    res.status(status).send(Http.STATUS_CODES[status])
}