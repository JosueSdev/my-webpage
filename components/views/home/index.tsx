// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Head from 'next/head'

import { ILanguage } from '../../../domain/model/language'

import pokemon from '../../../resources/home/pokemonTeam.json'
import devlangs from '../../../resources/home/devLangs.json'
import devStrings from '../../../resources/home/devStrings.json'

import DevCard from '../../modules/devcard'

import staticStrings from './strings'
import styles from './styles.module.css'
import Layout from '../../layout'

export default function Home({language}: {language: ILanguage}) {
  const safeStrings = staticStrings[language.id] || {}
  return (
    <Layout language={language}>
      <div className={styles.box}>
        <Head>
          <title>{safeStrings.title}</title>
        </Head>
        <h1 className={styles.header}>
          {safeStrings.header}
        </h1>
        <DevCard
          strings={devStrings}
          language={language}
          devlangs={devlangs}
          pokemon={pokemon}
        />
      </div>
    </Layout>
  )
}