// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { OGImage } from './openGraph';

export interface IImageResource {
    src: string,
    alt: string,
}

export interface IRecipeRes {
    slug: string,
    title: string,
    description: string,
    image: OGImage,
    locale: string,
    published: string,
}

export interface IEndPoint {
    method: string,
    url: string,
    showUrl: string,
    desc: string,
}

export interface INavigationLink {
    url: string,
    tag: string,
}