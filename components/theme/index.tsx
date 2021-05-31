// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import React, { useState, useEffect } from 'react'

import { ITheme } from '../../domain/model/theme'

import themes, { TThemeSetter, getThemeByName, storageKey } from '../../usecase/themes'

export interface Props {
    children: (theme: ITheme,renderer: TThemeSetter) => React.ReactNode,
}

export default function Theme({children}: Props) {
    const [theme, setTheme] = useState<ITheme>(themes[0])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tName = localStorage.getItem(storageKey)
            if (tName) {
                const t = getThemeByName(tName)

                if (typeof t === 'undefined') {
                    return
                }

                setTheme(t)
            }
        }
    })

    const setThemeHandler: TThemeSetter = (t: ITheme) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(storageKey, t.name)
        }
        setTheme(t)
    }

    return (
        <div className={theme.value}>
            {children(theme, setThemeHandler)}
        </div>
    )
}