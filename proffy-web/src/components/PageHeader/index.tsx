import React from 'react';
import Link from 'next/link';

import logoImg from '@static/images/logo.svg';
import backIcon from '@static/images/icons/back.svg';
import {
    PageHeader as PageHeaderCss,
    TopBarContainer,
    HeaderContent,
} from './styles';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    children,
}) => (
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
