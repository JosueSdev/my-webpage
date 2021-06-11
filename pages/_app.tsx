// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import type { AppProps } from 'next/app'

import { ILanguage } from '../domain/model/language'

import { getLanguageById } from '../usecase/language'

import '../styles/globals.css'
import '../styles/box.css'
import '../styles/normalize.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  const defaultLocale: ILanguage = {
    id: 'es',
    value: 'español',
  }
  const requestLocale = router.locale && getLanguageById(router.locale)
  const locale = requestLocale || defaultLocale

  return (
    <Layout
      language={locale}
    >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp