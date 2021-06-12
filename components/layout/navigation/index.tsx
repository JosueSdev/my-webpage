import React from 'react'
import Link from 'next/link'

import { INavigationLink } from '../../../domain/model/resource'
import { ILanguage } from '../../../domain/model/language'

import styles from './styles.module.css'

export interface Props {
    links: Array<INavigationLink>,
    language: ILanguage,
}

export default function Navigation({
    links,
    language,
}: Props) {

    return (
        <nav
            className={styles.box}
        >
            <ul
                className={styles.list}
            >
            {links.map(link => (
                <li
                    key={link.url}
                >
                    <Link
                        href={link.url}
                        locale={language.id}
                    >
                        <a>{link.tag}</a>
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
}