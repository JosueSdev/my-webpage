// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Image from 'next/image'

import { ITheme } from '../../../domain/model/theme';

import themes, { getThemeByName, TThemeSetter } from '../../../usecase/themes';

import links from '../../../resources/general/extLinks.json'

import styles from './styles.module.css'

export interface Props {
    theme: ITheme,
    setTheme: TThemeSetter,
}

export default function Footer({theme, setTheme}: Props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.externalLinks}>
                {
                    links.map(link => (
                        <a
                            href={link.href}
                            key={link.href}
                            className={styles.link}
                        >
                            <Image
                                src={link.src}
                                alt={link.alt}
                                title={link.alt}
                                width={28}
                                height={28}
                            />
                        </a>
                    ))
                }
            </div>
            <a
                rel='license'
                href='http://creativecommons.org/licenses/by-sa/4.0/'
                className={styles.ccLink}
            >
                <img
                    alt='Creative Commons License'
                    src='https://i.creativecommons.org/l/by-sa/4.0/80x15.png'
                />
            </a>
            <select
                value={theme.name}
                onChange={e => {
                    const t = getThemeByName(e.target.value)
                    if (t) {
                        setTheme(t)
                    }
                }}
            >
                {themes.map(t => (
                    <option
                        key={t.name}
                        value={t.name}
                    >
                        {t.name}
                    </option>
                ))}
            </select>
        </footer>
    )
}