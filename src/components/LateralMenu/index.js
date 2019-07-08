import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import {withRouter} from 'react-router-dom';
import { TitleContent, Title, Input, Button} from '../../styles';
import { MainContainer, LogoContent, ProjectsContent, SearchContent, NewProjectContent, ProjectsList, ProjectItem } from './styles';
import api from '../../services/api';
import EventEmitter from '../../services/emitter';

function LateralMenu(props){
    debugger

    const [projects, setProjects] = useState([])
    useEffect(() => {
        debugger;
        let response = {}
        async function fetchData(){
            response = await api.get('projects');
            setProjects(response.data.projects || []);
            
        }
        
        EventEmitter.subscribe('updateLateralManual', () => { fetchData(); })

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
                            <Title>{project.name}</Title>
                        </ProjectItem>
                    ) ||  <div/>
                })}    
                  
                </ProjectsList>
                <NewProjectContent>
                    <Button onClick={()=> navigate('/project/new')}> + Novo projeto</Button>
                </NewProjectContent>
            </ProjectsContent>
         
        </MainContainer>
    );
}

export default LateralMenu;
