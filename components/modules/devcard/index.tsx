import Image from 'next/image'
import Link from 'next/link'

import { ILanguage } from '../../../domain/model/languages'

import strings from './strings'

export default function DevCard(
    {
        language,
        devlangs,
        links,
        pokemon,
    }:
    {
        language: ILanguage,
        devlangs: Array<{src: string, alt: string}>,
        links: Array<{href: string, src: string, alt: string}>,
        pokemon?: Array<{src: string, alt: string}>,
    }
) {
    const safeStrings = strings[language.id] || {}

    return (
        <div>
            <p>{safeStrings.name}</p>
            <p>{safeStrings.title}</p>
            <p>{safeStrings.desc}</p>
            <div>
                <span>{safeStrings.devLangsTag}:</span>
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
                <span>{safeStrings.linksTag}:</span>
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
                <span>{safeStrings.pokemonTag}:</span>
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