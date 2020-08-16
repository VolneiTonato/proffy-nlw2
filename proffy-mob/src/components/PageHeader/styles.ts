import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 40px;
    background-color: ${props => props.theme.colors.colorPrimary};
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.getFont('Archivo_700Bold')};
    color: ${props => props.theme.colors.colorTitleInPrimary};
    font-size: 24px;
    line-height: 32px;
    max-width: 160px;
`;
