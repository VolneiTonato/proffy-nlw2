import styled from 'styled-components';

export const SelectBlock = styled.div`

    position: relative;

    & + & {
        margin-top: 1.4rem;
    }

    &:focus-within::after{
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: ${(props) => props.theme.colors.colorPrimaryLight};
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }

    @media(min-width: 700px){
        & + &{
            margin-top:0rem;
        }
    }

    label{
        font-size: 1.4rem;
    }
    

    select{
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: ${(props) => props.theme.colors.colorInputBackground};
        border: 1px solid ${(props) => props.theme.colors.colorLineInWhite};
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem ${(props) => props.theme.getFont('Archivo')};
    }


`;
