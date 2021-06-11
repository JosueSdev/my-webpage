// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

export interface OGImage {
    url: string,
    alt: string,
    width?: string,
    height?: string,
}

export interface OGMetadata {
    title: string,
    url: string,
    type: string,
    image: OGImage,
    description?: string,
    siteName?: string,
    locale?: string,
}