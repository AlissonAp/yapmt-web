import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import {withRouter} from 'react-router-dom';
import { TitleContent, Title, Input} from '../../styles';
import { MainContainer, LogoContent, ProjectsContent, SearchContent, ProjectsList, ProjectItem } from './styles';
import api from '../../services/api';

function LateralMenu(props){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        
        async function fetchData(){
            const response = await api.get('projects');
            console.log(response);
            setProjects(response.data.projects);
        }
        
        if(!projects.length){
            fetchData();
        }
    });

    return (
        
        <MainContainer>
            <LogoContent>
                <Title color={'black'} size={25} >
                    YAPMT
                </Title>
            </LogoContent>
            <ProjectsContent>
                <SearchContent>
                   <Input type="text" placeholder="Buscar projeto"></Input>
                </SearchContent>
                <TitleContent padding="5" align={"center"}>
                <Title color={'black'} size={25} >
                    Projetos
                </Title>
                </TitleContent>
                <ProjectsList>
                {
                    projects.map(project => {
                    return (
                        <ProjectItem key={project._id} onClick={()=> navigate(`/project/${project._id}`)}>
                            <h2>{project.name}</h2>
                        </ProjectItem>
                    )
                })}    
                  
                </ProjectsList>
            </ProjectsContent>
        </MainContainer>
    );
}

export default LateralMenu;
