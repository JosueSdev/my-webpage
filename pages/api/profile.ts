// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { VercelRequest, VercelResponse } from '@vercel/node'

import pokemon from '../../resources/home/devLangs.json'
import languages from '../../resources/home/devLangs.json'
import content from '../../resources/home/content.json'

interface Profile {
    name: string,
    title: string,
    desc: string,
}

export default function (_: VercelRequest, res: VercelResponse) {
  const response = {
      profile: {} as {
          en: Profile,
          es: Profile,
      },
      pokemonTeam: pokemon,
      favoriteLanguages: languages,
  }
  response.profile.en = content.en.devCard.content
  response.profile.es = content.es.devCard.content

  res.json(response)
}
