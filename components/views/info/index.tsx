import React from 'react'
import Head from 'next/head'

import { languages, ILanguage } from '../../../domain/model/language'

import Layout from '../../layout'

import staticStrings from './strings.json'
import styles from './styles.module.css'

interface StaticStrings {
    title: string,
}

export interface Props {
    children: React.ReactNode,
    language: ILanguage,
}

export default function Info({
    language,
    children,
}: Props) {
    let sStrings: StaticStrings = {} as StaticStrings
    if (language.id == languages.es.id) {
        sStrings = staticStrings.es
    }
    if (language.id == languages.en.id) {
        sStrings = staticStrings.en
    }
    return (
        <Layout
            language={language}
        >
            <Head>
                <title>{sStrings.title}</title>
            </Head>
            <article
                className={styles.article}
            >
                {children}
            </article>
        </Layout>
    )
}