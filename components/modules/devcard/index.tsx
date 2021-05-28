import Image from 'next/image'
import Link from 'next/link'

import { ILanguage } from '../../../domain/model/languages'

import staticStrings from './strings'

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
        links,
        pokemon,
    }:
    {
        strings: {[key: string]: ILocaleStrings},
        language: ILanguage,
        devlangs: Array<{src: string, alt: string}>,
        links: Array<{href: string, src: string, alt: string}>,
        pokemon?: Array<{src: string, alt: string}>,
    }
) {
    const safeLocaleStrings = strings[language.id] || {}
    const safeStaticStrings = staticStrings[language.id] || {}

    return (
        <div>
            <p>{safeLocaleStrings.name}</p>
            <p>{safeLocaleStrings.title}</p>
            <p>{safeLocaleStrings.desc}</p>
            <div>
                <span>{safeStaticStrings.devLangsTag}:</span>
                <div>
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
            <div>
                <span>{safeStaticStrings.linksTag}:</span>
                <div>
                    {
                        links.map(link => (
                            <a href={link.href} key={link.href}>
                                <Image
                                    src={link.src}
                                    alt={link.alt}
                                    title={link.alt}
                                    width={36}
                                    height={36}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
            {pokemon &&
            <div>
                <span>{safeStaticStrings.pokemonTag}:</span>
                <div>
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