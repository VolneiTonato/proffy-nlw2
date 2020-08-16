import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, TopBar, Title, HeaderTitle } from './styles';

import backIcon from '../../../assets/images/icons/back.png';
import logoImg from '../../../assets/images/logo.png';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    headerRight,
    children,
}) => {
    const { navigate } = useNavigation();

    const handleNavigateLandingPage = () => navigate('Landing');
    return (
        <Container>
            <TopBar>
                <BorderlessButton onPress={handleNavigateLandingPage}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" />
            </TopBar>

            <HeaderTitle>
                <Title style={{ marginVertical: 40 }}>{title}</Title>
                {headerRight}
            </HeaderTitle>

            {children}
        </Container>
    );
};

export default PageHeader;
