import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import api from '@services/api';
import landingImg from '@static/images/landing.png';
import studyIcon from '@static/images/icons/study.png';
import giveClasseIcon from '@static/images/icons/give-classes.png';
import heartIcon from '@static/images/icons/heart.png';
import {
    Container,
    SplashImage,
    Title,
    TitleBold,
    ButtonContainer,
    Button,
    ButtonImageIcon,
    ButtonText,
    TotalConnectionText,
} from './styles';

const Landing: React.FC = () => {
    const { navigate } = useNavigation();
    const [totalConnection, setTotalConnection] = useState(0);

    const handleNavigateGiveClassesPage = () => navigate('GiveClasses');
    const handleNavigateStudyPage = () => navigate('Study');

    const handleConnections = useCallback(async () => {
        const { data } = await api.get('connections');

        setTotalConnection(data?.totalConnection);
    }, []);

    useEffect(() => {
        handleConnections();
    }, [handleConnections]);

    return (
        <Container>
            <SplashImage
                style={{ resizeMode: 'contain' }}
                source={landingImg}
            />

            <Title>
                Seja bem-vindo,
                {`\n`}
                <TitleBold>O que deseja fazer?</TitleBold>
            </Title>

            <ButtonContainer>
                <Button onPress={handleNavigateStudyPage} typeButton="primary">
                    <ButtonImageIcon source={studyIcon} />

                    <ButtonText>Estudar</ButtonText>
                </Button>

                <Button
                    onPress={handleNavigateGiveClassesPage}
                    typeButton="secondary"
                >
                    <ButtonImageIcon source={giveClasseIcon} />

                    <ButtonText>Dar aulas</ButtonText>
                </Button>
            </ButtonContainer>

            <TotalConnectionText>
                Total de
                {` `}
                {totalConnection || '0'}
                {` `}
                conexões já realizadas
                <Image source={heartIcon} />
            </TotalConnectionText>
        </Container>
    );
};

export default Landing;
