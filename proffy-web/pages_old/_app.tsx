import React from 'react';
import { AppProps } from 'next/app';
import Theme from '../src/styles/Theme';
import GlobalStyles from '../src/styles/globals';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Theme>
    <GlobalStyles />
    <Component {...pageProps} />
  </Theme>
);

export default App;
