import Image from 'next/image'

import { ILanguage } from '../../../domain/model/language'

import staticStrings from './strings'
import styles from './styles.module.css'

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
    const safeStaticStrings = staticStrings[language.id] || {}

    return (
        <div className={styles.box}>
            <p className={styles.name}>
                {safeLocaleStrings.name}
            </p>
            <p className={styles.title}>
                {safeLocaleStrings.title}
            </p>
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