import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    typeButton: 'primary' | 'secondary';
}

export const Container = styled.View`
    background-color: ${props => props.theme.colors.colorPrimary};
    flex: 1;
    justify-content: center;
    padding: 40px;
`;

export const SplashImage = styled.Image`
    width: 100%;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_400Regular')};
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    margin-top: 80px;
`;

export const TitleBold = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_600SemiBold')};
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 40px;
    justify-content: space-between;
`;

export const Button = styled(RectButton)<ButtonProps>`
    height: 150px;
    width: 48%;
    border-radius: 8px;
    padding: 24px;
    justify-content: space-between;

    background-color: ${props =>
        props.typeButton === 'primary'
            ? props.theme.colors.colorPrimaryLighter
            : props.theme.colors.colorSecondaryDark};
`;

export const ButtonImageIcon = styled.Image``;

export const ButtonText = styled.Text`
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
    color: #fff;
    font-size: 20px;
`;

export const TotalConnectionText = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_600SemiBold')};
    color: ${props => props.theme.colors.colorTextInPrimary};
    font-size: 12px;
    line-height: 20px;
    max-width: 140px;
    margin-top: 40px;
`;
