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
    background-color: #DDD;
`
export const TitleContent =  styled.div`
     display: flex;
     border-radius: 3px;
     padding: ${(props) => `${props.padding}px`};
     justify-content: ${(props) => props.align};
     align-items: ${(props) => props.align};
     background-color: ${(props) => props.backColor};
`
export const Title = styled.span`
    font-size: ${(props) => `${props.size}px`};
    color : ${(props) => props.color};
    text-decoration: ${(props) => props.textDecorate};
`
export const Input = styled.input`
    padding: 5px;
    height : 40px;
    width : 100%;
    border-radius: 2px;
    font-size: 15px;
    border-bottom: 1px solid black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
`
export const Button = styled.button`
    color: ${props => props.innerColor};
    background-color: ${props => props.backColor};
    height: ${props => `${props.height}px`};
    margin: 0px 5px 0px 5px;
    padding: 10px;
    border-radius: 5px;
    min-width: 20px;
    border: 0;
    cursor: pointer;
`