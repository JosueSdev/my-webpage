// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import React from 'react'
import Link from 'next/link'

export interface Props {
    children?: React.ReactNode,
    href?: string,
}

export default function CustomLink({
    children,
    href,
}: Props) {
  return href && href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  ) : (
    <a
      href={href}
    >
      {children}
    </a>
  );
}
