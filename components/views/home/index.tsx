// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Head from 'next/head'

import { languages, ILanguage } from '../../../domain/model/language'

import pokemon from '../../../resources/home/pokemonTeam.json'
import devlangs from '../../../resources/home/devLangs.json'
import devStrings from '../../../resources/home/devStrings.json'

import Layout from '../../layout'
import DevCard from '../../modules/devcard'

import staticStrings from './strings.json'
import styles from './styles.module.css'

interface IStaticStrings {
  title: string,
  header: string,
}

export default function Home({language}: {language: ILanguage}) {
  let safeStrings: IStaticStrings = {} as IStaticStrings

  if(language.id === languages.es.id) {
    safeStrings = staticStrings.es
  }
  if(language.id === languages.en.id) {
    safeStrings = staticStrings.en
  }

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