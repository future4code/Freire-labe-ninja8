import React from "react";
import { ListContainer } from "./style";
import axios from "axios";
import { Card } from "./Card";

const headers = {
  Authorization: "c7954f39-6afa-4b88-a1fc-00e0ed288d79",
};

export default class index extends React.Component {
  state = {
    arrayDeServicos: [],
    filtroValorMinimo: 1,
    filtroValorMaximo: 100000,
    ordenaPorPreco: "crescente"
  };

  onChangeValorMinimo = (event) => {
    this.setState({
      filtroValorMinimo: event.target.value,
    });
  };
  onChangeValorMaximo = (event) => {
    this.setState({
      filtroValorMaximo: event.target.value,
    });
  };

  onChangePreco = (event) => {
    this.setState({
      ordenaPorPreco: event.target.value,
    });
  }
  componentDidMount() {
    this.pegaServicos();
  }
  pegaServicos = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";

    axios
      .get(url, { headers: headers })
      .then((response) => {
        this.setState({ arrayDeServicos: response.data.jobs });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    const servicosFiltrados = this.state.arrayDeServicos.filter((servico) => {
      return (
        servico.price >= this.state.filtroValorMinimo &&
        servico.price <= this.state.filtroValorMaximo
      );
    });

    const ordenaPreco = servicosFiltrados.sort((a, b) => {
      switch(this.state.ordenaPorPreco) {
        case "crescente":
          return a.price - b.price;
        case "decrescente":
          return b.price - a.price;
        case "titulo":
          return;
        case "prazo":
          return new Date(a.dueDate).getTime() > new Date(b.dueDate).getTime()
          ? 1 : -1;
        default:
          return true;
      }
    })

    const mapearArray = ordenaPreco.map((servico, index) => 
    {
      const data = `${servico.dueDate.slice(8, 10)}/${servico.dueDate.slice(5, 7)}/${servico.dueDate.slice(0, 4)}`
      return (      
        <Card key={index}>
          {servico.title}
          {data}
          {servico.price}
          <button> ver Detalhes </button>
        </Card>
      )});
  
    
    
    return (
      <div>
        <select onChange={this.onChangePreco}>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
          <option value="titulo">Título</option>
          <option value="prazo">Prazo</option>
        </select>
        <h1>LISTA</h1>
        <ListContainer>{mapearArray}</ListContainer>
        <input
          value={this.state.filtroValorMinimo}
          onChange={this.onChangeValorMinimo}
        />
        <input
          value={this.state.filtroValorMaximo}
          onChange={this.onChangeValorMaximo}
        />
      </div>
    );
  }
}
