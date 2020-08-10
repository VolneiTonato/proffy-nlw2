import styled from 'styled-components';
import { TextareaBlock } from '@components/Textarea/styles';
import { InputBlock } from '@components/Input/styles';
import { HeaderContent } from '@components/PageHeader/styles';
import {SelectBlock} from '@components/Select/styles'

export const PageTeacherForm = styled.div`
    width: 100vw;
    height: 100vh;

    ${HeaderContent}{
        margin-bottom: 6.4rem;
    }

    @media(min-width: 700px){
        max-width: 100vw;

        ${HeaderContent}{
            margin-bottom: 0;
        }
    }

`;

export const Main = styled.main`
    background : ${(props) => props.theme.colors.colorBoxBase};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    label{
        color: ${(props) => props.theme.colors.colorTextComplement};
    }

    fieldset{
        border: 0;
        padding: 0 2.4rem;

        & + &{
            margin-top: 6.4rem;
        }

        ${InputBlock} + ${TextareaBlock}, ${SelectBlock} + ${InputBlock}{
            margin-top: 2.4rem;
        }      

        @media(min-width: 700px){
            padding: 0 6.4rem;


            ${InputBlock} + ${InputBlock}, ${SelectBlock} + ${SelectBlock}{
                margin-top: 0rem;
            }
        }

        legend{
            font: 700 2.4rem ${(props) => props.theme.getFont('Archivo')};
            color: ${(props) => props.theme.colors.colorTextTitle};
            margin-bottom: 2.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 1.6rem;
            border-bottom: 1px solid ${(props) => props.theme.colors.colorLineInWhite};


            button{
                background: none;
                border: 0;
                color: ${(props) => props.theme.colors.colorPrimary};
                font: 700 1.6rem ${(props) => props.theme.getFont('Archivo')};
                cursor: pointer;
                transition: color 0.2s;

                &:hover{
                    color: ${(props) => props.theme.colors.colorPrimaryDark};
                }
            }
        }
        
    }

    footer{
        padding: 4rem 2.4rem;
        background: ${(props) => props.theme.colors.colorBoxFooter};
        border-top: 1px solid ${(props) => props.theme.colors.colorLineInWhite};
        margin-top: 6.4rem;

        @media(min-width: 700px){
            padding: 4.0rem 6.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        p{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: ${(props) => props.theme.colors.colorTextComplement};

            @media(min-width: 700px){
                justify-content: space-between;
            }


            img{
                margin-right: 2rem;
            }
        }

        button{
            width: 100%;
            height: 5.6rem;
            background: ${(props) => props.theme.colors.colorSecondary};
            color: ${(props) => props.theme.colors.colorButtonText};
            border: 0;
            border-radius: 0.8rem;
            cursor: pointer;
            font: 700 1.6rem ${(props) => props.theme.getFont('Archivo')};
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: background-color 0.2s;
            margin-top: 3.2rem;

            &:hover{
                background: ${(props) => props.theme.colors.colorSecondaryDark};
            }

            @media(min-width: 700px){
                width: 20rem;
                margin-top: 0;
            }
        }
    }
`;

export const ScheduleItem = styled.div`

    @media(min-width: 700px){
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;


        ${InputBlock}{
            margin-top: 0 !important;
        }
    }

`;
