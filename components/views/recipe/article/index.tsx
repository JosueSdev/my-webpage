import React from 'react'

import styles from './styles.module.css'

export interface Props {
    children: React.ReactNode,
}

export default function RecipeArticle({
    children,
}: Props) {
    return (
        <article
            className={styles.article}
        >
            {children}
        </article>
    )
}