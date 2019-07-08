import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1%;
    justify-content: space-between;
    padding: 1em;
`

export const RightHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1em;
    align-items: flex-start;
    height: 28em;
    overflow: auto;
`

export const AddNewTask = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 1.5em;
    justify-content: flex-start;
`
