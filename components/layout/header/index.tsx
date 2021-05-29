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