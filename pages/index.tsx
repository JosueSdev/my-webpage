import Link from 'next/link'

import languages from '../usecase/languages'

import Layout from '../components/layout'

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