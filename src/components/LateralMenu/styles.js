import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex: 2;
    margin: 1%;
    flex-direction: column;
    max-width : 200px;
`
export const LogoContent = styled.div`
    display: flex;
    flex: 0.2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color : #F2994A;
`
export const ProjectsContent = styled.div`
    display: flex;
    margin-top: 5%;
    padding: 5%;
    flex: 1.8;
    flex-direction: column;
    border-radius: 2px;
    background-color : #828282;
`
export const NewProjectContent = styled.div`
    display: flex;
    margin-top: 5%;
    padding: 5%;
    flex: 0.2;
    flex-direction: column;
`

export const SearchContent = styled.div`
    display: flex;
    padding: 20px 5px 20px 5px;
    flex-direction: column;
`
export const ProjectsList = styled.div`
    display: flex;
    overflow: auto;
    flex: 1.2;
    margin-top: 5%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`
export const ProjectItem = styled.div`
    display: flex;
    width : 100%;
    margin: 2%;
    border-radius: 2px;
    padding: 1em;
    background-color: white;
    cursor: pointer;
`