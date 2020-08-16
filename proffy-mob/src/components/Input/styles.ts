import styled from 'styled-components/native';

interface InputProps {
    isErrored: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.View<InputProps>`
    width: 100%;
`;

export const Label = styled.Text`
    color: ${props => props.theme.colors.colorTextInPrimary};
    font-family: ${props => props.theme.getFont('Poppins_400Regular')};
`;

export const TextInput = styled.TextInput`
    height: 54px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.colorInputBackground};
    justify-content: center;
    margin-top: 4px;
    margin-bottom: 16px;
    padding-horizontal: 16px;
`;
