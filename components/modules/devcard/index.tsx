// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import Image from 'next/image'

import { languages, ILanguage } from '../../../domain/model/language'

import staticStrings from './strings.json'
import styles from './styles.module.css'

interface IStaticStrings {
    devLangsTag: string,
    pokemonTag: string,
}

export interface ILocaleStrings {
    name: string,
    title: string,
    desc: string,
}

export default function DevCard(
    {
        strings,
        language,
        devlangs,
        pokemon,
    }:
    {
        strings: {[key: string]: ILocaleStrings},
        language: ILanguage,
        devlangs: Array<{src: string, alt: string}>,
        pokemon?: Array<{src: string, alt: string}>,
    }
) {
    const safeLocaleStrings = strings[language.id] || {}
    let safeStaticStrings: IStaticStrings = {} as IStaticStrings
    if (language.id === languages.es.id) {
        safeStaticStrings = staticStrings.es
    }
    if (language.id === languages.en.id) {
        safeStaticStrings = staticStrings.en
    }

    return (
        <div className={styles.box}>
            <p className={styles.name}>
                {safeLocaleStrings.name}
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
                {safeLocaleStrings.title}
            </p>
            <br />
            <p>{safeLocaleStrings.desc}</p>
            <div>
                <p>{safeStaticStrings.devLangsTag}:</p>
                <div className={styles.techList}>
                    {
                        devlangs.map(lang => (
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
                <p>{safeStaticStrings.pokemonTag}:</p>
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