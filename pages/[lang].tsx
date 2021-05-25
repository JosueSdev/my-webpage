import { GetStaticPaths, GetStaticProps } from 'next'

import languages, { ILanguage } from "../domain/model/languages";
import { getStaticLangs, getLanguageById } from "../usecase/languages"
import Home from "../components/views/home";

export default function Index({ language }: { language: ILanguage}) {
    return <Home language={language} />
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getStaticLangs()

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const language = getLanguageById(params.lang as string)

    return {
        props: {
            language,
        }
    }
}