// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Image from 'next/image'

export interface Props {
    src?: string,
    alt?: string,
}

export default function CustomImg({src, alt}: Props) {
    return (
        <Image
            src={src ? src : ''}
            alt={alt}
            layout='fill'
        />
    )
}