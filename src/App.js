import styled from "styled-components";
import React from 'react';
import Header from "./components/Header/Header";
import { GlobalStyle } from "./Global";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import ListServices from "./components/ListServices/List"
import Home from "./components/Home/Home"


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default class App extends React.Component {
  state = {
    currentPage: "menu"
  }

  ChoosePage = () => {
    switch (this.state.currentPage) {
      case "menu":
        return <Home
        goToRegistration={this.goToRegistration}
        goToList={this.goToList}
        />
      case "registration":
        return  <RegistrationForm/>
      case "list":
        return <ListServices/>
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

  goToRegistration = () => {
    this.setState({currentPage: "registration"})
  }

  goToList = () => {
    this.setState({currentPage: "list"})
  }

  goToMenu = () => {
    this.setState({currentPage: "menu"})
  }

  render () {

    return (
      <>
        <GlobalStyle/>
        <AppContainer>
          <Header
          goToMenu={this.goToMenu}
          />
          {/* <Home/> */}
          {this.ChoosePage()}
        </AppContainer>
      </>
    );
  }
}


