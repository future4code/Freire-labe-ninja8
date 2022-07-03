import React from "react";
import { ListContainer } from "./style";
import axios from "axios";
import { Card } from "./Card";

const headers = {
  Authorization: "c7954f39-6afa-4b88-a1fc-00e0ed288d79",
};

export default class index extends React.Component {
  state = {
    filtroValorMinimo: 1,
    filtroValorMaximo: 100000,
    ordenaPorPreco: "crescente",
    arrayDeServicos: [],
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

  adicionaItem = (event) => {
    const idServico = Number(event.target.id)
    const novaListaDeServicos = this.state.arrayDeServicos.map((servico) => {
     if (servico.id === idServico) {
      return servico 
     }
    })
    this.setState ({
      arrayDeServicos: novaListaDeServicos
    })
  }

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
          {servico.title} <br></br> <br></br> 
          {data} <br></br> <br></br>
          {servico.price} <br></br> <br></br> 
          <button> ver Detalhes </button> 
          <button onClick={() => this.adicionaItem(servico.id)}>🛒</button>
          {/* <div>
          servicos = {[...this.state.arrayDeServicos]}
        </div> */}
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
        <input
          value={this.state.filtroValorMinimo}
          onChange={this.onChangeValorMinimo}
          placeholder="Valor Mínimo"
        />
        <input
          value={this.state.filtroValorMaximo}
          onChange={this.onChangeValorMaximo}
          placeholder="Valor Máximo"
        />
        <h1>LISTA</h1>
        <ListContainer>{mapearArray}</ListContainer>
    
      </div>

    );
  }
}
