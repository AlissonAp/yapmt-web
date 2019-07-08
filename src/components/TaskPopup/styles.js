import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    padding: 2em;
    flex-direction: row;
`

export const Popup = styled.div`
    display: flex;
    position: fixed;  
    width: 100%;  
    height: 100%;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    margin: auto;  
    background-color: rgba(0,0,0, 0.5);  
`
export const PopupInner = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 2em;
    height: 30%; 
    margin: auto;  
    border-radius: 20px;  
    background: white;  
`

export const TopButton = styled.div`
    position: absolute;
    top:0;
    right:0;
    padding: 10px;
`