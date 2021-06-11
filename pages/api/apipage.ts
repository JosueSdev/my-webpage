// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { VercelRequest, VercelResponse } from '@vercel/node'

import endpoints from '../../resources/api/apiUrls.json'

export default function (_: VercelRequest, res: VercelResponse) {
    res.json(endpoints)
}