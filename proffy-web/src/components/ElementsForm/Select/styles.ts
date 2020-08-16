import styled, { css } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from '@components/Tooltip';

interface SelectBlockProps {
    isFilled: boolean;
    isFocused: boolean;
    isErrored: boolean;
}

const FocusWithin = `
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
`;

export const ContainerSelect = styled.div``;

export const SelectBlock = styled.div<SelectBlockProps>`
    position: relative;

    & + & {
        margin-top: 1.4rem;
    }

    &:focus-within::after {
        ${FocusWithin} {
            background: ${props => props.theme.colors.colorPrimaryLight};
        }
    }

    &:not(:focus-within)::after {
        ${props =>
            props.isErrored &&
            css`
                ${FocusWithin} {
                    background: ${props.theme.colors.colorDanger};
                }
            `}

        ${props =>
            props.isFilled &&
            css`
                ${FocusWithin} {
                    background: ${props.theme.colors.colorPrimaryLight};
                }
            `}
    }

    @media (min-width: 700px) {
        & + & {
            margin-top: 0rem;
        }
    }

    label {
        font-size: 1.4rem;
    }
    /*
    select {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: ${props => props.theme.colors.colorInputBackground};
        border: 1px solid ${props => props.theme.colors.colorLineInWhite};
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem ${props => props.theme.getFont('Archivo')};
    }*/
    

    ${ContainerSelect} {
        flex-grow: 1;
        display: flex;
        align-items: center;
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        border: 1px solid ${props => props.theme.colors.colorLineInWhite};
        outline: 0;
        padding: 0 1.6rem;
        background: ${props => props.theme.colors.colorInputBackground};
        font: 1.6rem ${props => props.theme.getFont('Archivo')};

        select {
            flex: 1;
            border: 0;
            outline: 0;
            background: ${props => props.theme.colors.colorInputBackground};
        }
    }

`;

export const IconError = styled(FiAlertCircle)`
    color: ${props => props.theme.colors.colorDanger};
    size: 20;
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    ${IconError} {
        margin: 0;
    }

    span {
        text-align: center;
        background: ${props => props.theme.colors.colorDanger};
        color: ${props => props.theme.colors.colorTitleInPrimary};
        &::before {
            border-color: ${props => props.theme.colors.colorDanger} transparent;
        }
    }
`;
