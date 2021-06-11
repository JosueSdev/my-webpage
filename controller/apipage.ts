// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { IEndPoint } from '../domain/model/resource'

import endpoints from '../resources/api/apiUrls.json'
import { getLocaleField } from '../usecase/language'

export function getLocalizedEndpoints(locale: string): Array<IEndPoint> {
    return endpoints.map(ep => ({
        method: ep.method,
        url: ep.url,
        showUrl: ep.showUrl,
        desc: getLocaleField(ep.desc, locale) as typeof ep.desc.es
    }))
}