import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#1db954 ;
    
    h1{
        margin-right: 1400px;
        font-size: 30px;
    }

    img{
        margin-left: 50px;
    }
`

export const CartButton = styled.button`
    background: none;
    border: none;
    margin-right: 50px;
    margin-top: 7px;

    :hover{
        cursor: pointer;
    }
`

export const HomeButton = styled.button`
    background: #1db954;
    border-radius: 7px;
    font-size: 15px;
    color: #212121;
    padding: 8px;
    border-color: #212121;
    border: 2px solid;
    font-weight: bold;
    transition: 160ms;

    :hover{
        background-color:#1cd25c ;
        color: white;
        cursor: pointer;
        border-color:#212121;
    }

`
