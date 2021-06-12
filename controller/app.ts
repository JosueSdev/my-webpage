// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { INavigationLink } from '../domain/model/resource';

import { getLocaleField } from '../usecase/language';

import navigationLinks from '../resources/general/navigationLinks.json'

export function getLocalizedNavigationLinks(locale: string): Array<INavigationLink> {
    return navigationLinks.map(nl => ({
        tag: getLocaleField(nl.tag, locale) as typeof nl.tag.es,
        url: nl.url,
    }))
}