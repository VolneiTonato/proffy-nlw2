import styled from 'styled-components';
import { Form } from '@unform/web';

export const PageTeacherList = styled.div`
    width: 100vw;
    height: 100vh;

    @media (min-width: 700px) {
        max-width: 100%;
    }
`;

export const SeachTeachers = styled(Form)`
    margin-top: 3.2rem;

    button {
        width: 100%;
        height: 5.6rem;
        background: ${props => props.theme.colors.colorSecondary};
        color: ${props => props.theme.colors.colorButtonText};
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem ${props => props.theme.getFont('Archivo')};
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        outline: none !important;
        border: none !important;
        margin-top: 3.2rem;

        &:hover {
            background: ${props => props.theme.colors.colorSecondaryDark};
        }
    }

    label {
        color: ${props => props.theme.colors.colorTextInPrimary};
    }

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;

export const TeacherMain = styled.main`
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px) {
        padding: 3.2rem 0;
        max-width: 740px;
        margin: 0 auto;
    }
`;

export const TeacerMainContainerMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
`;

export const TeacerMainMessage = styled.div``;
