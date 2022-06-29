import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 12px;
}

*::-webkit-scrollbar-track {
        background: #1db954;
}

*::-webkit-scrollbar-thumb {
        background-color: #212121;
        border-radius: 20px;
        border: 3px solid #535353;
}
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif ;
        background-color: #212121;
    }

`;

