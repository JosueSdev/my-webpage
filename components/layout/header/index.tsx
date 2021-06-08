// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { useRouter } from 'next/router'

import { ILanguage } from '../../../domain/model/language';

import { singleLocalePathNames } from '../../../usecase/language'

import LocaleSelector from '../../modules/localeSelector';

import styles from './styles.module.css'

export interface Props {
    locale: ILanguage,
}

export default function Header({
    locale,
}: Props) {
    const router = useRouter()

    return (
        <header className={styles.header}>
            <span
                className={styles.siteName}
            >
                Josué S Dev
            </span>
            <span>
                {!singleLocalePathNames.find(path => path === router.pathname) &&
                    <>
                        🌐{' '}
                        <LocaleSelector locale={locale}/>
                    </>
                }
            </span>
        </header>
    )
}