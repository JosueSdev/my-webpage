// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { OGImage, OGMetadata } from '../domain/model/openGraph';

export function newOpenGraphMetadata(
    title: string,
    url: string,
    type: string,
    image: OGImage,
    description?: string,
    siteName?: string,
    locale?: string,
): OGMetadata {
    const ogMeta = {} as OGMetadata

    ogMeta.title = title
    ogMeta.url = url
    ogMeta.image = image
    ogMeta.type = type

    ogMeta.description = description
    ogMeta.locale = locale
    ogMeta.siteName = siteName

    return ogMeta
}