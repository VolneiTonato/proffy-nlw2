import styled from 'styled-components';

export const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.colorPrimary};

    @media (min-width: 700px) {
        height: 340px;
    }
`;

export const TopBarContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.colorTextInPrimary};
    padding: 1.6rem 0;

    @media (min-width: 700px) {
        max-width: 1100px;
    }

    a {
        height: 3.2rem;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.6;
        }
    }

    > img {
        height: 1.6rem;
    }
`;

export const HeaderContent = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    @media (min-width: 700px) {
        flex: 1;
        max-width: 740px;
        margin: 0 auto;
        padding-bottom: 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    strong {
        font: 700 3.6rem ${props => props.theme.getFont('Archivo')};
        line-height: 4.2rem;
        color: ${props => props.theme.colors.colorTitleInPrimary};

        @media (min-width: 700px) {
            max-width: 350px;
        }
    }

    p {
        max-width: 30rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: ${props => props.theme.colors.colorTextInPrimary};
        margin-top: 2.4rem;
    }
`;
