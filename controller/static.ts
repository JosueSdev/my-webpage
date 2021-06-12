// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import path from 'path'

import { OGImage } from '../domain/model/openGraph'

export function getBaseCanonicalUrl(locale: string, defaultLocale: string): string {
    const isDefaultLocale = locale! === defaultLocale
    return path.join(process.env.NEXT_PUBLIC_CANONICAL_URL || '', isDefaultLocale ? '' : locale!)
}

export function getCompleteOGImage(ogImage: OGImage, baseCanonUrl: string): OGImage {
    return {
        ...ogImage,
        url: path.join(baseCanonUrl, ogImage.url)
    }
}