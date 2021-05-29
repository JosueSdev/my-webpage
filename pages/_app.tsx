// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/normalize.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
