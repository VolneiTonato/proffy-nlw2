import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
`;

export const Content = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: rgb(242, 242, 242, 0.7);
    overflow-y: hidden;
`;
