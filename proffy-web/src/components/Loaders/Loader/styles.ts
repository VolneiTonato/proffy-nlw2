import styled from 'styled-components';

interface ContainerProps {
    isVisibled: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    flex: 1;
    align-items: center;
    justify-content: center;
    display: ${props => (props.isVisibled ? 'flex' : 'none')};
`;

export const LoaderImage = styled.img``;
