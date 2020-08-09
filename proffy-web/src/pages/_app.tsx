import React from 'react';
import { AppProps } from 'next/app';
import Theme from '../styles/Theme';
import GlobalStyles from '../styles/globals';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Theme>
    <GlobalStyles />
    <Component {...pageProps} />
  </Theme>
);

export default App;
