// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import React from "react";

import { ILanguage } from '../../domain/model/language';

import { getLocalizedNavigationLinks } from '../../controller/app';

import Theme from '../theme';
import Footer from './footer';
import Header from './header';
import Navigation from './navigation';

import styles from './styles.module.css'

export interface Props {
    children: React.ReactNode,
    language: ILanguage,
}

export default function Layout({
    children,
    language,
}: Props) {
    return (
        <Theme>
        {(theme, setTheme) => (
            <div className={styles.layout}>
                <Header
                    locale={language}
                />
                <Navigation
                    language={language}
                    links={getLocalizedNavigationLinks(language.id)}
                />
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