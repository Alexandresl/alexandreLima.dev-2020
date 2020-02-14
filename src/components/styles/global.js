import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body.dark {
        --background: #171B27;
        --textPrimary: #c5c5c5;
        --textSecondary: #3F5BBA;
        --textTertiary: #848EA8;
        --textNormal: #b8b7bf;
        --colorPrimary: --textSecondary;
        --colorSecondary: #F55555;
        --colorError : #F55555;
        --colorSuccess : #4CAF50;
        --footer : #0f121aff;
        --recommendedLink: #282a36;
    }

    body.light {
        --background: #ffffff;
        --textPrimary: #223364;
        --textSecondary: #3F5BBA;
        --textTertiary: #848EA8;
        --textNormal: #333;
        --colorPrimary: --textSecondary;
        --colorSecondary: #F55555;
        --colorError : #F55555;
        --colorSuccess : #4CAF50;
        --footer : #f5f5f5ff;
        --recommendedLink: #f5f5f5;
    }

`;

export default GlobalStyles;
