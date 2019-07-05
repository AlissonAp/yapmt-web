import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    max-width : 400px;
    height : 100%;
    margin: 1%;
    flex-direction : column;
    background-color: ${props => props.color ? props.color : '#6FCF97' };
    padding: 10px;
    border-radius: 5px;
    justify-content: space-between;
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
export const FooterContainer = styled.div`
    display: flex;
    color: gray;
    justify-content: space-between;
    align-items: baseline;

`