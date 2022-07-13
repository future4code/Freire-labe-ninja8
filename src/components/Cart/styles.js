import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    color: white;
    flex-direction: column;

    >button{
    background: #1db954;
    border-radius: 7px;
    font-size: 15px;
    color: #212121;
    padding: 6px;
    border-color: #212121;
    border: 2px solid;
    font-weight: bold;
    width: 150px;

    :hover{
        background-color:#1cd25c ;
        color: white;
        cursor: pointer;
        border-color:#212121;
    }
    
    }`

export const ItensContainer = styled.div`
    border: 5px solid #1db954;
    padding: 10px;
    margin: 10px;
    width: 500px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #212121;

    button{
    background: transparent;
    border: none;
    
    :hover{
        cursor: pointer;
    }
    }
`