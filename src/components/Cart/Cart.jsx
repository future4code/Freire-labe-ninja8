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
