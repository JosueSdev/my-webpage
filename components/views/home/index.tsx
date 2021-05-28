import { ILanguage } from '../../../domain/model/languages'

import pokemon from '../../../resources/home/pokemonTeam.json'
import devlangs from '../../../resources/home/devLangs.json'
import links from '../../../resources/home/extLinks.json'
import devStrings from '../../../resources/home/devStrings.json'

import Layout from '../../layout'
import DevCard from '../../modules/devcard'

import staticStrings from './strings'

export default function Home({language}: {language: ILanguage}) {
  const safeStrings = staticStrings[language.id] || {}
  return (
    <Layout>
      <h1>{safeStrings.header}</h1>
      <DevCard
        strings={devStrings}
        language={language}
        devlangs={devlangs}
        pokemon={pokemon}
        links={links}
      />
    </Layout>
  )
}