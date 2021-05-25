import { ILanguage } from '../../../domain/model/languages'
import Layout from '../../layout'

import strings from './strings'

export default function Home({language}: {language: ILanguage}) {
  const safeStrings = strings[language.id] || {}
  return (
    <Layout>
      <h1>{safeStrings.header}</h1>
    </Layout>
  )
}