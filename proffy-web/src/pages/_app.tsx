import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'nprogress/nprogress.css';

import Theme from '@styles/Theme';
import GlobalStyles from '@styles/globals';
import { useNProgress } from '@hooks/useNProgress';
import AppProvider from '@context/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const { handleProgressRouter } = useNProgress();

    useEffect(() => {
        handleProgressRouter();
    }, [handleProgressRouter]);

    return (
        <Theme>
            <GlobalStyles />
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </Theme>
    );
};

export default App;
