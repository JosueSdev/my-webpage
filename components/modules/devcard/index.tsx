// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Image from 'next/image'

import { IImageResource } from '../../../domain/model/resource'

import styles from './styles.module.css'

export interface IDevCardStrings {
    tags: {
        devLangs: string,
        pokemon: string,
    },
    content: {
        name: string,
        title: string,
        desc: string,
    }
}

export interface Props {
    strings: IDevCardStrings,
    devLangs: Array<IImageResource>,
    pokemon: Array<IImageResource>,
}

export default function DevCard({
    strings,
    devLangs,
    pokemon,
}: Props) {
    return (
        <div className={styles.box}>
            <p className={styles.name}>
                {strings.content.name}
            </p>
            <span
                className={styles.cv}
            >
                <a
                    href='/static/docs/cv.pdf'
                    target='_blank'
                    rel='noopener'
                >
                    CV
                </a>
            </span>
            <p className={styles.title}>
                {strings.content.title}
            </p>
            <br />
            <p>{strings.content.desc}</p>
            <div>
                <p>{strings.tags.devLangs}:</p>
                <div className={styles.techList}>
                    {
                        devLangs.map(lang => (
                            <Image
                                key={lang.src}
                                src={lang.src}
                                alt={lang.alt}
                                title={lang.alt}
                                width={36}
                                height={36}
                            />
                        ))
                    }
                </div>
            </div>
            {pokemon &&
            <div>
                <p>{strings.tags.pokemon}:</p>
                <div className={styles.pokemonList}>
                    {
                        pokemon.map(poke => (
                            <Image
                                key={poke.src}
                                src={poke.src}
                                alt={poke.alt}
                                title={poke.alt}
                                width={96}
                                height={96}
                            />
                        ))
                    }
                </div>
            </div>
            }
        </div>
    )
}