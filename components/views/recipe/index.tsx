// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Link from 'next/link'
import { useRouter } from 'next/router'

import { IRecipeRes } from '../../../domain/model/resource';

import styles from './style.module.css'

export interface IRecipesStrings {
    content: {
        header: string,
    }
}

export interface Props {
    recipes: Array<IRecipeRes>,
    strings: IRecipesStrings,
}

export default function Recipes({
    recipes,
    strings,
}: Props) {
    const router = useRouter()

    return (
        <div className="box">
            <h1>{strings.content.header}</h1>
            <ul
                className={styles.list}
            >
            {
                recipes.map(recipe => (
                    <li
                        key={recipe.title}
                        title={recipe.title}
                        className={styles.listItem}
                    >
                        <Link
                            href={`${router.pathname}/${recipe.slug}`}
                            locale={recipe.locale}
                        >
                            <a className={styles.img}>
                                <img
                                    src={recipe.image.url}
                                    alt={recipe.image.alt}
                                    title={recipe.image.alt}
                                    width={96}
                                    height={96}
                                />
                                <span className={styles.localeTag}>
                                🌐 {recipe.locale}
                                </span>
                            </a>
                        </Link>
                        <Link
                            href={`${router.pathname}/${recipe.slug}`}
                            locale={recipe.locale}
                        >
                            <a><h2>{recipe.title}</h2></a>
                        </Link>
                        <p>{recipe.description}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}