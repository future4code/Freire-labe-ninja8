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

    const mapearArray = this.state.servicosFiltrados?.map((servico, index) => (
      <Card key={index}>
        {servico.title}
        {servico.dueDate}
        {servico.price}
        <button> ver Detalhes </button>
      </Card>
    ));

    return (
      <div>
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
