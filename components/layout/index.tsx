import React from "react";
import Theme from '../theme';
import Footer from './footer';
import Header from './header';

export interface Props {
    children: React.ReactNode,
}

export default function Layout({children}: Props) {
    return (
        <Theme>
        {(theme, setTheme) => (
            <div>
                <Header />
                {children}
                <Footer
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
        )}
        </Theme>
    )
}