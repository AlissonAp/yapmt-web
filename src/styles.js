import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    height: 600px;
    margin: 2%;
    flex: 10;
    flex-direction: row;
    
`

export const PageContent = styled.div`
    display: flex;
    padding: 1em;
    margin: 1%;
    flex: 8;
    background-color: red;
`

export const TitleContent =  styled.div`
    display: flex;
     padding: ${(props) => `${props.padding}px`};
     justify-content: ${(props) => props.align};
     align-items: ${(props) => props.align};
`

export const Title = styled.span`
    font-size: ${(props) => `${props.size}px`};
    color : ${(props) => props.color};
`

export const Input = styled.input`
    padding: 5px;
    height : 40px;
    width : 100%;
    border-radius: 2px;
    font-size: 15px;
    border: 1px solid black;
`