// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { VercelRequest, VercelResponse } from '@vercel/node'

import greetings from '../../resources/general/apiGreeting.json'

export default function (_: VercelRequest, res: VercelResponse) {
    res.json(greetings)
}