import { ILanguage } from '../../../domain/model/language'

import Layout from '../../layout'

export interface Props {
    language: ILanguage,
}

export default function Info({language}: Props) {
    return (
        <Layout
            language={language}
        >
            {language.value}
        </Layout>
    )
}