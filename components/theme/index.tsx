import React, { useState } from 'react'

import { ITheme } from '../../domain/model/theme'

import themes, {TThemeSetter} from '../../usecase/themes'

export interface Props {
    children: (theme: ITheme,renderer: TThemeSetter) => React.ReactNode,
}

export default function Theme({children}: Props) {
    const [theme, setTheme] = useState<ITheme>(themes[0])
    return (
        <div className={theme.value}>
            {children(theme, setTheme)}
        </div>
    )
}