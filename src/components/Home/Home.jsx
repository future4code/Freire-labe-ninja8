import React, { Component } from 'react'
import { MenuContainer } from './style'


export default class index extends Component {
    render() {
        return (
            <MenuContainer>
                    <div>
                    <button onClick={this.props.goToRegistration}>Virar ninja</button>
                    <button onClick={this.props.goToList}>Contratar ninja</button>
                    </div>       
            </MenuContainer>
        )
    }
}