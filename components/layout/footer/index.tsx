import { ITheme } from '../../../domain/model/theme';

import themes, { getThemeByName, TThemeSetter } from '../../../usecase/themes';

export interface Props {
    theme: ITheme,
    setTheme: TThemeSetter,
}

export default function Footer({theme, setTheme}: Props) {
    return (
        <footer>
            <select
                value={theme.name}
                onChange={e => {
                    const t = getThemeByName(e.target.value)
                    if (t) {
                        setTheme(t)
                    }
                }}
            >
                {themes.map(t => (
                    <option
                        key={t.name}
                        value={t.name}
                    >
                        {t.name}
                    </option>
                ))}
            </select>
        </footer>
    )
}