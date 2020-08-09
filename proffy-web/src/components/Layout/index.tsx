import React from 'react';
import Head from 'next/head';

import { Root } from './styles';

interface LayoutProps{
    title:string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet" />
    </Head>
    <Root id="root">{children}</Root>
  </>
);

export default Layout;
