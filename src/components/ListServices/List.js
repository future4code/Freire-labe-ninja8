import React from 'react'
import { ListContainer } from './style'
import axios from 'axios'

const headers = {
    Authorization: "c7954f39-6afa-4b88-a1fc-00e0ed288d79"
}

export default class index extends React.Component {
    state = {
        arrayDeServicos: [
            {
                title: "a",
                
            },
            {
                title: "v"
            }
        ]
    }

    componentDidMount(){
        this.pegaServicos();
    }
    pegaServicos = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
     
        axios.get(url, {headers: headers})
        .then((response) => {
            this.setState({arrayDeServicos:response.jobs});
        })
        .catch((error) => {
            console.log(error.response);
        })
    }
    render() {
        const mapearArray = this.state.arrayDeServicos.map((servico, index) => (
            <div key={index}>
                {servico.title}
                {servico.dueDate}
                <button > ver Detalhes </button>
            </div>
             )
    )
        return (
            <div>
                 
                    <h1>LISTA</h1>
                    <div>{mapearArray}</div>
            </div>
        )
    }
}