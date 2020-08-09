import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root{
        font-size: 60%
    }
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.colors.colorBackground};
    }


    a {
        color: inherit;
        text-decoration: none;
    }

    html, body, #root {
        height: 100vh;
    }

    
    body,
    input,
    button,
    textarea{
        font: 500 1.6rem ${(props) => props.theme.getFont('Poppins')};
        color: ${(props) => props.theme.colors.colorTextBase};
    }


    .container{
        width: 90vw;
        max-width: 700px;
    }

    @media(min-width: 700px){
        :root{
            font-size: 62.5%
        }
    }
`;
