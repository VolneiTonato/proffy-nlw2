import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    GiveClassesBackgroundImage,
    Title,
    Subtitle,
    ButtonOK,
    ButtonOkText,
} from './styles';

import giveClassesBackgroundImage from '../../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
    const { goBack } = useNavigation();
    return (
        <Container>
            <GiveClassesBackgroundImage
                resizeMode="contain"
                source={giveClassesBackgroundImage}
            >
                <Title>Quer ser um Proffy?</Title>
                <Subtitle>
                    Para começar, você precisa se cadastrar como professor na
                    nossa plataforma web.
                </Subtitle>
            </GiveClassesBackgroundImage>
            <ButtonOK style={{ marginVertical: 40 }} onPress={() => goBack()}>
                <ButtonOkText>Tudo bem</ButtonOkText>
            </ButtonOK>
        </Container>
    );
};

export default GiveClasses;
