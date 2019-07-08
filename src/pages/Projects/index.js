import React, { Component } from 'react';
import {MainContainer, Title, TitleContent } from '../../styles';

// import { Container } from './styles';

export default class Projects extends Component {
  render() {
    return (
      <MainContainer style={{'justifyContent': 'center','alignItems': 'center'}}>
        <TitleContent>
          <Title size={22}>
            Para continuar selecione um projeto ou crie um novo!
          </Title>
        </TitleContent>
      </MainContainer>
    );
  }
}
