import { GetStaticPaths, GetStaticProps } from 'next'

import { ILanguage } from "../domain/model/language";
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
    const language = params ? getLanguageById(params.lang as string) : undefined

    return {
        props: {
            language,
        }
    }
}