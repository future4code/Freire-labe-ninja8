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
                    <CartButton> <img src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png' height ="40" width="40"></img></CartButton>
                </div>
            </HeaderContainer>
        )
    }
}