// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import React from "react";

import Theme from '../theme';

import Footer from './footer';
import Header from './header';
import styles from './styles.module.css'

export interface Props {
    children: React.ReactNode,
}

export default function Layout({children}: Props) {
    return (
        <Theme>
        {(theme, setTheme) => (
            <div className={styles.layout}>
                <Header />
                <div className={styles.body}>
                    {children}
                </div>
                <Footer
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
        )}
        </Theme>
    )
}