// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Link from 'next/link';

import styles from './styles.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <span
                className={styles.siteName}
            >
                Josué S Dev
            </span>
            <span>
                🌐{' '}
                <Link href='/'>
                    <a
                        className={styles.languageLink}
                    >
                        lingvo
                    </a>
                </Link>
            </span>
        </header>
    )
}