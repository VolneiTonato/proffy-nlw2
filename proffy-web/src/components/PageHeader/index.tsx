import React from 'react';
import Link from 'next/link';

import { PageHeader as PageHeaderCss, TopBarContainer, HeaderContent } from './styles';

const logoImg = '/images/logo.svg';
const backIcon = '/images/icons/back.svg';

interface PageHeaderProps {
  title: string;
  description?: string

}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => (
  <PageHeaderCss>
    <TopBarContainer>
      <Link href="/">
        <a>
          <img src={backIcon} alt="voltar" />
        </a>
      </Link>

      <img src={logoImg} style={{ color: 'red' }} alt="Proffy" />
    </TopBarContainer>

    <HeaderContent>
      <strong>{title}</strong>
      {description && <p>{description}</p>}

      {children}
    </HeaderContent>

  </PageHeaderCss>
);

export default PageHeader;
