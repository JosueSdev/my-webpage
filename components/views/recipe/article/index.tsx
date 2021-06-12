import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

export interface Props {
    children: React.ReactNode,
}

export default function RecipeArticle({
    children,
}: Props) {
    return (
        <article
            className={classnames(
                styles.article,
                'box',
            )}
        >
            {children}
        </article>
    )
}