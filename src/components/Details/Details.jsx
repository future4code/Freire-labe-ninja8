import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'


export const Lista = styled.li`
border: px solid black;
`

const detalhesCard = (props) => {
  return(
    <button onClick={() => props.verDetalhes("Details", props.servicoId)}>Ver Detalhes</button>
  )
}


export default class VerDetalhes extends React.Component {
  state = {
    servicos: []
  }

  componentDidMount() {
    this.buscarServicos();
  }

  buscarServicos = () => {
    // const url = "https://labeninjas.herokuapp.com/jobs"
    // const url = "https://labeninjas.herokuapp.com/jobs/:id"
    // const url = "https://labeninjas.herokuapp.com/jobs/0e6848ee-63e7-4400-b641-46f2e64656f7"

    axios.get(`${baseURL}/jobs/$id`, {
      headers: {
        Authorization: "c7954f39-6afa-4b88-a1fc-00e0ed288d79"
      }
    })
      .then((res) => {
        this.setState({ servicos: res.data.jobs });
      })
      .catch((error) => {
        alert(error.message)
      })
  }


  render() {

    const novoServicos = this.state.servicos.map((servico) => {

      return (
        <Lista key={servico.id}>
          <h1>DETALHES DO SERVIÇO</h1>
          titulo:{servico.title}
          <p>pagamentos:{servico.paymentMethods}</p>
          <p>data:{servico.dueDate}</p>
          <p>prazo:{servico.price}</p>
          <p>descrição:{servico.description}</p>
          <hr />
        </Lista>

      )
    })
    return (
      <div>
        {novoServicos}
      </div>

    )
  }
}