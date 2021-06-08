// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import React from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import raw from 'rehype-raw'
import sanitize from 'rehype-sanitize'
import rehype2react from 'rehype-react'

import CustomLink from './customLink'

export function markdownString2React(md: string) {
    return unified()
        .use(markdown)
        .use(remark2rehype, {allowDangerousHtml: true})
        .use(raw)
        .use(sanitize)
        .use(rehype2react, {
            createElement: React.createElement,
            components: {
                a: CustomLink,
            }
        })
        .processSync(md)
        .result as React.ReactNode
}