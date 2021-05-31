// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { ITheme } from '../../domain/model/theme'

import themeBold from '../../styles/theme/bold.module.css'
import themeLight from '../../styles/theme/light.module.css'
import themeDark from '../../styles/theme/dark.module.css'

export type TThemeSetter = (T: ITheme) => void

const themes: Array<ITheme> = [
    {
        name: 'Dark',
        value: themeDark.theme,
    },
    {
        name: 'Light',
        value: themeLight.theme,
    },
    {
        name: 'Bold',
        value: themeBold.theme,
    },
]

export default themes

export const storageKey = 'THEME'

export function getThemeByName(name: string) {
    return themes.find(theme => theme.name == name)
}