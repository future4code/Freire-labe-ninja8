import React, { Component } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RegistrationContainer } from './style'
import { ItensContainer } from './style'
import { RegistrationButton } from './style'
import { Title } from './style'
import { baseUrl, headers } from '../constants'

export default class index extends Component {

    state = {
        inputNameService: "",
        inputDescription: "",
        inputPrice: "",
        inputPayment: [],
        inputDate: ""
    }

    changeInputNameValue = (event) => {
        this.setState({inputNameService: event.target.value})
    }

    changeInputDescriptionValue = (event) => {
        this.setState({inputDescription: event.target.value})
    }

    changeInputPriceValue = (event) => {
        this.setState({inputPrice: event.target.value})
    }

    changeInputPaymentValue = (event) => {
        this.setState({inputPayment: [event.target.value, ...this.state.inputPayment]})
    }

    changeInputDateValue = (event) => {
        this.setState({inputDate: event.target.value})
    }

    createService = (event) => {
        event.preventDefault()
        const body = {
            title: this.state.inputNameService,
            description:this.state.inputDescription,
            price:+this.state.inputPrice,
            paymentMethods:this.state.inputPayment,
            dueDate:this.state.inputDate
        }

        axios.post(`${baseUrl}/jobs`, body, headers)
        .then(response => {
            this.setState({inputNameService: "", inputDescription: "", inputPrice: "", inputPayment: [], inputDate: ""})
            toast.success("Serviço criado com sucesso, agora você é um ninja!");
        }).catch(err => {
            toast.error("Ocorreu um erro, tente novamente!");
            console.log(err)
        })
    }

    render() {
        return (
            <RegistrationContainer>
                <ToastContainer
                position="top-center"
                theme='dark'
                />
                <Title>
                    <h1>Cadastre seu serviço!</h1>
                </Title>
                <ItensContainer onSubmit={this.createService}>
                    <input 
                    type='text'
                    placeholder='Tipo de serviço'
                    value={this.state.inputNameService}
                    onChange={this.changeInputNameValue}>
                    </input>

                    <input 
                    type='text'
                    placeholder='Descrição'
                    value={this.state.inputDescription}
                    onChange={this.changeInputDescriptionValue}>
                    </input>

                    <input 
                    id='number' 
                    type='number' 
                    placeholder='Preço R$'
                    value={this.state.inputPrice}
                    onChange={this.changeInputPriceValue}>
                    </input>

                    <select 
                    multiple
                    name='payment' 
                    id='payment'
                    value={this.state.inputPayment}
                    onChange={this.changeInputPaymentValue}
                    >
                        <option value='Cartão de crédito'>Cartão de crédito</option>
                        <option value='Cartão de débito'>Cartão de débito</option>
                        <option value='Pix'>Pix</option>
                        <option value='Paypal'>Paypal</option>
                        <option value='Boleto'>Boleto</option>
                    </select>

                    <input 
                    id="date" 
                    type="date"
                    value={this.state.inputDate}
                    onChange={this.changeInputDateValue}>
                    </input>
                </ItensContainer>
                <RegistrationButton onClick={this.createService} type='submit'>Cadastrar</RegistrationButton>
            </RegistrationContainer>
        )
    }
}