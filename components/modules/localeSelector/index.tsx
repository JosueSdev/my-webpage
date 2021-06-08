// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import React from 'react'
import { useRouter }  from 'next/router'
import Head from 'next/head'
import Cookie from 'cookie-light'

import { languages, ILanguage } from '../../../domain/model/language';

interface Props {
    locale: ILanguage,
}

export default function LocaleSelector({locale} : Props) {
    const router = useRouter()

    const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        if (typeof document !== 'undefined') {
            Cookie.set('NEXT_LOCALE', e.target.value, { secure: 'secure' })
        }
        router.push(router.asPath, '', {locale: e.target.value})
    }

    const langKeys = Object.keys(languages)
    const localeSelectors = langKeys.map(lk => ({
        str: languages[lk].id === router.defaultLocale ? '' : `/${languages[lk].id}`,
        locale: languages[lk].id,
    }))

    return (
        <>
            <Head>
                {localeSelectors.map(lk => (
                    <link
                        key={lk.str}
                        rel="alternate"
                        hrefLang={lk.locale}
                        href={`${process.env.NEXT_PUBLIC_CANONICAL_URL}${lk.str}${router.asPath}`}
                    />
                ))}
            </Head>
            <select
                value='default'
                onChange={handleChangeLocale}
            >
                <option
                    value='default'
                    disabled
                >
                    Lingvo
                </option>
                {langKeys.map(lk => (
                    <option
                        key={languages[lk].id}
                        value={languages[lk].id}
                    >
                        {languages[lk].value}
                    </option>
                ))}
            </select>
        </>
    )
}