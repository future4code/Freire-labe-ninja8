<<<<<<< HEAD
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
=======
import React, { Component } from "react";

export default class index extends React.Component {
  render() {
    const produtosDois = this.props.servicos.map((produto) => {
       return (
        <div>
        <p>{produto.title} x </p>
        <p>{produto.price}</p>
      </div>
       )
    });
    return (
      <div>
        <h3>Carrinho 🛒</h3>
        {produtosDois}
      </div>
    );
  }
}
>>>>>>> 2f86735fad8fdb1b3b078b1489429e6b19bc0f81
