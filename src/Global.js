import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 5px;
}

*::-webkit-scrollbar-track {
        background:#212121 ;
}

*::-webkit-scrollbar-thumb {
        background-color: #1db954;
        border-radius: 20px;
}
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif ;
        background-color: #212121;
    }

`;

