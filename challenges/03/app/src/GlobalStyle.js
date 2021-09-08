import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    html {
        background-color: lightgreen;
    }

    #root {
        display: flex;
        flex-direction: row;
    }
`

export default GlobalStyle;