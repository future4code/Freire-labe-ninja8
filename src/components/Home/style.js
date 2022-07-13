import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    button{
    background: #1db954;
    border-radius: 7px;
    font-size: 25px;
    color: #212121;
    padding: 3px;
    border: 3px solid #121212;
    font-weight: bold;
    transition: 160ms;
    margin: 100px;
    /* width: 31%;  */

    :hover{
        background-color:#1cd25c ;
        color: white;
        cursor: pointer;
        border-color: #212121;
    }
    }
`