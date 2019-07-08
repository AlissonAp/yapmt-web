import styled from 'styled-components';

export const MainContainer = styled.div`
    width : 320px;
    height: 75px;
    margin: 1%;
    flex-direction : column;
    background-color: ${props => props.color ? props.color : 'white' };
    padding: 10px;
    border-radius: 5px;
`

export const CenterContainer = styled.div`
    display: flex;
    margin: 1%;
    flex-direction: row;
`

export const CheckBox = styled.input`
    color: blue;
    height: 25px;
    width: 25px;
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5px;
`

export const FooterContainer = styled.div`
    display: flex;
    color: gray;
    justify-content: space-between;
    align-items: baseline;

`