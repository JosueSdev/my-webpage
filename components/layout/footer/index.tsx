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
                                width={36}
                                height={36}
                            />
                        </a>
                    ))
                }
            </div>
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