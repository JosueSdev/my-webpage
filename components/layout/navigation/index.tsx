import React from 'react'
import Link from 'next/link'

import { ILanguage } from '../../../domain/model/language'

import languages from '../../../usecase/languages'

import navData from '../../../resources/general/navigationLinks.json'

import styles from './styles.module.css'

export interface Props {
    language: ILanguage,
}

interface INavLink {
    url: string,
    tag: string,
}

export default function Navigation({
    language,
}: Props) {
    let data: Array<INavLink>
    if (language.id === languages.es.id) {
        data = navData.es
    } else if (language.id === languages.en.id) {
        data = navData.en
    } else {
        data = []
    }

    return (
        <nav
            className={styles.box}
        >
            <ul
                className={styles.list}
            >
            {data.map(link => (
                <li
                    key={link.url}
                >
                    <Link href={link.url}>
                        <a>{link.tag}</a>
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}