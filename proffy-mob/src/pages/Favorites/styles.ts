import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.colorBackground};
`;

export const FovoritesTeacherListScroll = styled.ScrollView`
    margin-top: -40px;
`;
