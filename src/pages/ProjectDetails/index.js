import React, { useState, useEffect} from "react";
import { Title } from '../../styles';
import { MainContainer, CardsContainer, HeaderContainer } from "./styles";
import Task from "../../components/Task";
import api from '../../services/api';

export default function ProjectDetails(props){
    debugger;
    const [project, setProject] = useState({});
    const [tasks, setTasks] = useState([]);
    const [isNewProject, setIsNewProject] = useState(false);

    useEffect(() => {
      console.log("run use effect");
      async function fetchData(){
        debugger;
        if(props.id){
          const response = await api.get(`projects/${props.id}`);
          debugger;
          setProject(response.data.projects[0])
          setTasks(response.data.projects[0].tasks)
          console.log(project);
        }else{
          setIsNewProject(true);
        }
      }
      if(project._id !== props.id){
        debugger;
        fetchData();
      }
    })

    return (
      
      <MainContainer>
        <HeaderContainer>
          <Title size="20">{project.name}</Title>
        </HeaderContainer>
        <CardsContainer>
          { 
            tasks.map(task => {
            return(
              <Task key={task._id} title={task.description} owner={task.owner} date={task.dueDate} />
            )
          })}

        </CardsContainer>
      </MainContainer>
    );
  }

