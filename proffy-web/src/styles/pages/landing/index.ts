import styled from 'styled-components';

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.colorTextInPrimary};
    background: ${props => props.theme.colors.colorPrimary};
`;

export const PageLandingContent = styled.div`
    @media (min-width: 1100px) {
        max-width: 1100px;
        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas:
            'logo hero hero'
            'buttons buttons total';
    }
`;

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    img {
        height: 10rem;
    }

    h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
    }

    @media (min-width: 1100px) {
        grid-area: logo;
        align-self: center;
        margin: 0;
        text-align: left;

        h2 {
            text-align: initial;
            font-size: 3.6rem;
        }

        img {
            height: 100%;
        }
    }
`;

export const HeroImage = styled.img`
    width: 100%;

    @media (min-width: 1100px) {
        grid-area: hero;
        justify-self: end;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    @media (min-width: 1100px) {
        grid-area: buttons;
        justify-content: flex-start;
    }
`;

interface LinkProps {
    typeText: 'study' | 'giveClasses';
}

export const LinkButton = styled.a<LinkProps>`
    cursor: pointer;
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem ${props => props.theme.getFont('Archivo')};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.2s;
    color: ${props => props.theme.colors.colorButtonText};

    background: ${props =>
        props.typeText === 'study'
            ? props.theme.colors.colorPrimaryLighter
            : props.theme.colors.colorSecondary};

    &:hover {
        background: ${props =>
            props.typeText === 'study'
                ? props.theme.colors.colorPrimaryLight
                : props.theme.colors.colorSecondaryDark};
    }

    &:first-child {
        margin-right: 1.6rem;
    }

    @media (min-width: 1100px) {
        font-size: 2.4rem;
    }

    img {
        width: 4rem;
        margin-right: 2.4rem;
    }
`;

export const TotalConnection = styled.span`
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1100px) {
        grid-area: total;
        justify-self: end;
    }

    img {
        margin-left: 0.8rem;
    }
`;
