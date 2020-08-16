import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.colorBackground};
`;

export const TeacherListScroll = styled.ScrollView`
    margin-top: -40px;
`;

export const SearchForm = styled.View`
    margin-bottom: 24px;
`;

export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InputBlock = styled.View`
    width: 48%;
`;

export const SearchButonConfirm = styled(RectButton)`
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: 8px;
    background-color: ${props => props.theme.colors.colorSecondary};
`;

export const SearchButonConfirmText = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.colorButtonText};
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
`;
