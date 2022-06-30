import React, { Component } from 'react'
import { CartContainer } from './styles'
import { ItensContainer } from './styles'
import Trash from '../../img/001-trash.png'

export default class index extends Component {
    state = {
        jobs: [
            {
                id: 1,
                name: "Pedreiro",
                price: 15,
            },
            {
                id: 1,
                name: "Médico",
                price: 300,
            }
        ]
    }

    // JobDelete = (id) => {  estrutura função de deletar job

    // }

    render() {
        console.log(this.state.jobs[0].name)
        return (
            <CartContainer>
                <ItensContainer>
                    <p>{this.state.jobs[1].name}</p>
                    <p>R${this.state.jobs[1].price}</p>
                    <button><img src={Trash} height ="25" width="25"></img></button>
                </ItensContainer>
                <ItensContainer>
                    <p>{this.state.jobs[0].name}</p>
                    <p>R${this.state.jobs[0].price}</p>
                    <button><img src={Trash} height ="25" width="25"></img></button>
                </ItensContainer>
                    <h2>Valor total: R$315</h2>
                    <button>Contratar</button>
            </CartContainer>
        )
    }
}