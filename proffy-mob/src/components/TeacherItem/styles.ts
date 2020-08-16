import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

interface FavoriteButtonProps {
    isFavorited: boolean;
}

export const Container = styled.View`
    background-color: ${props => props.theme.colors.colorBoxBase};
    border-width: 1px;
    border-color: ${props => props.theme.colors.colorLineInWhite};
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`;

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 24px;
`;

export const ProfileAvatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: ${props => props.theme.colors.colorLineInWhite};
`;

export const ProfileInfo = styled.View`
    margin-left: 16px;
`;

export const ProfileInfoName = styled.Text`
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
    color: ${props => props.theme.colors.colorTextTitle};
    font-size: 20px;
`;

export const ProfileInfoSubject = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_400Regular')};
    color: ${props => props.theme.colors.colorTextBase};
    font-size: 12px;
    margin-top: 4px;
`;

export const BioContent = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_400Regular')};
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.colorTextBase};
`;

export const FooterContainer = styled.View`
    background-color: ${props => props.theme.colors.colorBoxFooter};
    padding: 24px;
    align-items: center;
    margin-top: 24px;
`;

export const FooterPriceText = styled.Text`
    font-family: ${props => props.theme.getFont('Poppins_400Regular')};
    color: ${props => props.theme.colors.colorTextBase};
    font-size: 14px;
`;

export const FooterPriceInnerText = styled.Text`
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
    color: ${props => props.theme.colors.colorPrimary};
    font-size: 16px;
`;

export const FooterButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
`;

const ButtonBase = styled(RectButton)`
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;

export const FavoriteButton = styled(ButtonBase)<FavoriteButtonProps>`
    background-color: ${props => {
        if (props.isFavorited) return props.theme.colors.colorDanger;
        return props.theme.colors.colorPrimary;
    }};
`;

export const ContactButton = styled(ButtonBase)`
    background-color: ${props => props.theme.colors.colorSecondary};
    flex: 1;
    flex-direction: row;
`;

export const ContactButtonText = styled.Text`
    color: ${props => props.theme.colors.colorButtonText};
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
    font-size: 16px;
    margin-left: 16px;
`;
