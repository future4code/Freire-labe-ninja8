import React, { Component } from 'react'
import { MenuContainer } from './style'


export default class index extends Component {
    render() {
        return (
            <MenuContainer>
                    <div>
                    <button onClick={this.props.goToRegistration}>virar ninja</button>
                    <button onClick={this.props.goToList}>contratar ninja</button>
                    </div>       
            </MenuContainer>
        )
    }
}