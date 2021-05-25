import languages, { ILanguage } from '../../../domain/model/languages'
import Layout from '../../layout'
import DevCard from '../../modules/devcard'

import strings from './strings'
import pokemon from '../../../resources/pokemonTeam.json'
import devlangs from '../../../resources/devLangs.json'
import links from '../../../resources/extLinks.json'

export default function Home({language}: {language: ILanguage}) {
  const safeStrings = strings[language.id] || {}
  return (
    <Layout>
      <h1>{safeStrings.header}</h1>
      <DevCard
        language={language}
        devlangs={devlangs}
        pokemon={pokemon}
        links={links}
      />
    </Layout>
  )
}