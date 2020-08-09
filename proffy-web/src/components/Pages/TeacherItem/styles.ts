import styled from 'styled-components';

export const Container = styled.article`
    background: ${(props) => props.theme.colors.colorBoxBase};
    border: 1px solid ${(props) => props.theme.colors.colorLineInWhite};
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    

    header{
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;

        img{
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        > div{
            margin-left: 2.4rem;

            > strong{
                font: 700 2.4rem ${(props) => props.theme.getFont('Archivo')};
                display: block;
                color: ${(props) => props.theme.colors.colorTextTitle};
            }

            > span{
                font-size: 1.6rem;
                display: block;
                margin-top: 0.4rem;
            }
        }

    }

    > p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
    }


    > footer{
        padding: 3.2rem 2rem;
        background: ${(props) => props.theme.colors.colorBoxFooter};
        border-top: 1px solid ${(props) => props.theme.colors.colorLineInWhite};
        margin-top: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p strong {
            color : ${(props) => props.theme.colors.colorPrimary};
            font-size: 1.6rem;
            display: block;
        }

        button{
            width: 20rem;
            height: 5.6rem;
            background: ${(props) => props.theme.colors.colorSecondary};
            color: ${(props) => props.theme.colors.colorButtonText};
            border: 0;
            border-radius: 0.8rem;
            cursor: pointer;
            font: 700 1.4rem ${(props) => props.theme.getFont('Archivo')};
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            transition: 0.2s;

            &:hover{
                background: ${(props) => props.theme.colors.colorSecondaryDark};
            }
        }
    }


    @media(min-width:700px){

        header, footer{
            padding: 3.2rem;
        }

        > p {
            padding: 0 3.2rem;
        }

        footer p strong {
            display: initial;
            margin-left: 1.6rem;
        }

        footer button{
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;

            img {
                margin-right: 1.6rem;
            }
        }
    }
`;
