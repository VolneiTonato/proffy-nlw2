import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.colorPrimary};
    flex: 1;
    justify-content: center;
    padding: 40px;
`;

export const GiveClassesBackgroundImage = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
    color: ${props => props.theme.colors.colorTitleInPrimary};
    font-size: 32px;
    line-height: 37px;
    max-width: 180px;
`;

export const Subtitle = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_400Regular')};
    margin-top: 24px;
    color: ${props => props.theme.colors.colorTextInPrimary};
    font-size: 16px;
    line-height: 26px;
    max-width: 240px;
`;

export const ButtonOK = styled(RectButton)`
    background-color: ${props => props.theme.colors.colorSecondary};
    height: 58px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const ButtonOkText = styled.Text`
    color: ${props => props.theme.colors.colorButtonText};
    font-size: 16px;
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
`;
