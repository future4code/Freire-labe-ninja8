import styled from "styled-components";

export const RegistrationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const ItensContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 4px solid #1db954;
    width: 30%;
    height: 50vh;
    border-radius: 10px;
    background-color: #121212;

    input[type="text"],[type="number"]{
        padding: 5px;
        border-radius: 10px;
        font-size: 20px;
        width: 60%;
        margin: 20px;
        border: 1px solid #1db954;
        /* font-weight: bold; */
        background-color: #212121;
        color: white;

        ::placeholder{
            /* color: white; */
        }
    }

    input[type="date"]{
        padding: 5px;
        border-radius: 10px;
        font-size: 20px;
        width: 60%;
        margin: 20px;
        border: 1px solid #1db954;
        /* font-weight: bold; */
        background-color: #212121;
        color: gray;
        }

    select{
        padding: 10px;
        border-radius: 10px;
        font-size: 20px;
        width: 63%;
        height: 70px;
        margin: 20px;
        border: 2px solid #1db954;
        /* font-weight: bold; */
        background-color: #212121;
        color: gray;}`

export const Title = styled.div`
    color:white;
    margin-bottom: 50px;
`

export const RegistrationButton = styled.button`
    background: #1db954;
    border-radius: 7px;
    font-size: 25px;
    color: #212121;
    padding: 3px;
    border: 3px solid #121212;
    font-weight: bold;
    transition: 160ms;
    margin: 10px;
    width: 31%;

    :hover{
        background-color:#1cd25c ;
        color: white;
        cursor: pointer;
        border-color: #212121;
    }
`