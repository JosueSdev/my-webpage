import Link from 'next/link'

import languages from '../../../usecase/languages'

import styles from './styles.module.css'

export default function LocaleSelection() {
    return (
        <div className={styles.box}>
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