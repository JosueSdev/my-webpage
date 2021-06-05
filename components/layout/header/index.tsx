// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { ILanguage } from '../../../domain/model/language';

import LocaleSelector from '../../modules/localeSelector';

import styles from './styles.module.css'

export interface Props {
    locale: ILanguage,
}

export default function Header({
    locale,
}: Props) {
    return (
        <header className={styles.header}>
            <span
                className={styles.siteName}
            >
                Josué S Dev
            </span>
            <span>
                🌐{' '}
                <LocaleSelector locale={locale}/>
            </span>
        </header>
    )
}