import { ITheme } from '../../domain/model/theme'

import themeBold from '../../styles/theme/bold.module.css'
import themeLight from '../../styles/theme/light.module.css'
import themeDark from '../../styles/theme/dark.module.css'

export type TThemeSetter = React.Dispatch<React.SetStateAction<ITheme>>

const themes: Array<ITheme> = [
    {
        name: 'dark',
        value: themeDark.theme,
    },
    {
        name: 'light',
        value: themeLight.theme,
    },
    {
        name: 'bold',
        value: themeBold.theme,
    },
]

export default themes

export function getThemeByName(name: string) {
    return themes.find(theme => theme.name == name)
}