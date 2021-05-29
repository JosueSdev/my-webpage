// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Link from 'next/link'
import Head from 'next/head'

import languages from '../../../usecase/languages'

import styles from './styles.module.css'

export default function LocaleSelection() {
    return (
        <div className={styles.box}>
            <Head>
                <title>Josue S Dev</title>
            </Head>
            <h1 className={styles.header}>
                Elekti lingvon
            </h1>
            <ul className={styles.list}>
                {Object.keys(languages).map(langKey => (
                    <li key={langKey}>
                        <Link href={`/${languages[langKey].id}`}><a>{languages[langKey].value}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}