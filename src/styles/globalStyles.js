import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    button, a{
        cursor: pointer;
    }

`;

export default globalStyles;
