import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{  
        box-sizing: border-box;
        font-family: 'Voltaire', sans-serif;
        text-decoration: none;
    }

    body{
        background: #999999;
    }

    h1,h2,h3{
        font-family: 'Concert One', cursive;
    } 
`

export default GlobalStyle;