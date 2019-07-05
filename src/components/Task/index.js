import React, { Component } from 'react';
import { TitleContent, Title } from '../../styles';
import { MainContainer, CenterContainer, FooterContainer, CheckBox } from './styles';

export default function Task(props){
    return (
        <MainContainer>
            <CenterContainer>
                <CheckBox type="checkbox"></CheckBox>
                <TitleContent padding="4">
                <Title size="14" color="black">{props.title}</Title>
                </TitleContent>
            </CenterContainer>
            <FooterContainer>
                <Title size={12} color="blue">{props.owner}</Title>
                <Title size={10}>{props.date}</Title>
            </FooterContainer>
        </MainContainer>

    )
  }

