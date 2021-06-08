// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez
import { IImageResource } from '../../../domain/model/resource'

import DevCard, { IDevCardStrings } from '../../modules/devcard'

import styles from './styles.module.css'

export interface IHomeStrings {
  content: {
    header: string,
  },
  devCard: IDevCardStrings,
}

export interface Props {
  strings: IHomeStrings,
  langsList: Array<IImageResource>,
  pokemonList: Array<IImageResource>,
}

export default function Home({
  strings,
  langsList,
  pokemonList,
}: Props) {
  return (
    <div className={styles.box}>
      <h1 className={styles.header}>
        {strings.content.header}
      </h1>
      <DevCard
        strings={strings.devCard}
        devLangs={langsList}
        pokemon={pokemonList}
      />
    </div>
  )
}