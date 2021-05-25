import Link from 'next/link'

import languages from '../domain/model/languages'

export default function Index() {
    return (
        <div>
            <h1>Elekti lingvon</h1>
            <ul>
                {Object.keys(languages).map(langKey => (
                    <li key={langKey}>
                        <Link href={`/${languages[langKey].id}`}><a>{languages[langKey].value}</a></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}