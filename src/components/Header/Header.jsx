import React, { Component } from 'react'
import { HeaderContainer,CartButton } from './styles'
import { HomeButton } from './styles'


export default class index extends Component {
    render() {
        return (
            <HeaderContainer>
                <img src='https://cdn-icons-png.flaticon.com/512/1074/1074766.png' height ="40" width="40"></img>
                <h1>LabeNinjas</h1>
                <div>
                    <HomeButton onClick={this.props.goToMenu}>Página inicial</HomeButton>
                </div>
                <div>
                    <CartButton> <img src='https://cdn-user-icons.flaticon.com/74309/74309382/1656481378618.svg?token=exp=1656482218~hmac=c8fb304e3b3dd06a839e528d52f7d02d' height ="40" width="40"></img></CartButton>
                </div>
            </HeaderContainer>
        )
    }
}