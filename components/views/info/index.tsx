import React from 'react'

import { ILanguage } from '../../../domain/model/language'

import Layout from '../../layout'

import styles from './styles.module.css'

export interface Props {
    children: React.ReactNode,
    language: ILanguage,
}

export default function Info({
    language,
    children,
}: Props) {
    return (
        <Layout
            language={language}
        >
            <article
                className={styles.article}
            >
                {children}
            </article>
        </Layout>
    )
}