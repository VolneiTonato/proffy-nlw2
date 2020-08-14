import styled, { css } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from '@components/Tooltip';

interface TextareaBlockProps {
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
    bottom: 5px;
`;

export const ContainerTextarea = styled.div``;

export const TextareaBlock = styled.div<TextareaBlockProps>`
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


    ${ContainerTextarea} {
        flex-grow: 1;
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 8rem;
        height: 16rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        border: 1px solid ${props => props.theme.colors.colorLineInWhite};
        outline: 0;
        padding: 1.2rem 1.6rem;
        background: ${props => props.theme.colors.colorInputBackground};

        textarea {
            flex: 1;
            resize: none;
            font: 1.6rem ${props => props.theme.getFont('Archivo')};
            border: 0;
            outline: 0;
            padding: 1.2rem 0;
            height: 16rem;
            background: ${props => props.theme.colors.colorInputBackground};
            
        }

       
    }
    /*
    textarea {
        width: 100%;
        height: 16rem;
        min-height: 8rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: ${props => props.theme.colors.colorInputBackground};
        border: 1px solid ${props => props.theme.colors.colorLineInWhite};
        outline: 0;
        resize: vertical;
        padding: 1.2rem 1.6rem;
        font: 1.6rem ${props => props.theme.getFont('Archivo')};
    }*/
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
