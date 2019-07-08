import React, { useState, useEffect} from "react";
import { Title, Input, Button, TitleContent } from '../../styles';
import { MainContainer, CardsContainer, HeaderContainer, AddNewTask, RightHeaderContainer} from "./styles";
import Task from "../../components/Task";
import api from '../../services/api';
import { navigate } from 'hookrouter';
import TaskPopup from "../../components/TaskPopup";
import EventEmitter from '../../services/emitter';
import { isAfter } from 'date-fns';

export default function ProjectDetails(props){
    debugger;
    const [projectStatus, setProjectStatus] = useState({})
    const [changeView, setChangeView] = useState(false);
    const [openPopupNewTask, setOpenPopupNewTask] = useState(false);
    const [project, setProject] = useState({});
    const [tasks, setTasks] = useState([]);
    const [isNewProject, setIsNewProject] = useState(false);

    useEffect(() => {
      console.log("run use effect");
      async function fetchData(){
        debugger;
          const response = await api.get(`projects/${props.id}`);
          setProject(response.data.projects[0])
          setTasks(response.data.projects[0].tasks)
          checkProjectStatus(response.data.projects[0].tasks);
      }

      if(props.id == 'new'){
        setIsNewProject(true);
      }else{
        setIsNewProject(false);
        if(project._id !== props.id || changeView){
          setChangeView(false);
          fetchData();
         
        }
      }
    })

    function checkProjectStatus(responseTasks){

      debugger;

      const concluidas = responseTasks.filter(el => {
        return el.closed == true;
      }).length;

      const atrasadas = responseTasks.filter(el => {
        return !isAfter(new Date(el.dueDate), new Date())
      }).length;

      const totais = responseTasks.length;

      setProjectStatus({
        concluidas,
        atrasadas,
        totais
      })

    }

    async function saveProject(){
      if(project.name){
        let response = {}
        if(project._id){
          response = await api.put(`projects/${project._id}`)
        }else{
          response = await api.post('projects', project);
        }
      
        if(response.status == 201 || response.status == 200){
          EventEmitter.dispatch('updateLateralManual', {})
          navigate(`./${response.data.project._id}`)
        }else{
          alert(`Falha ao criar o projeto. ${response.data.cause}`);
        }

      }else{
        alert("Informe um nome para o projeto!")
      }
    }

    async function removeProject(){
      //eslint-disable-next-line
      if(confirm("Tem certeza que deseja excluir este projeto?")){
        const response = await api.delete(`projects/${props.id}`)
        if(response.status == 200){
          EventEmitter.dispatch('updateLateralManual', {});
          navigate('/');
        }else{
          alert("Falha ao excluir projeto!");
        }
      }
    }

    async function changeTaskStatus(task){
      debugger;
      const response = await api.put(`projects/${props.id}/tasks/${task._id}`,task)
      if(response.status == 200){
        setChangeView(true);
      }
    }

    function onChangeProject(e) {
      setProject({
        name: e.target.value
      })
    }

    function OpenClosePopupCreate(){
        if(openPopupNewTask){
          setChangeView(true);
        }
        setOpenPopupNewTask(!openPopupNewTask);
        
    }

    function onChangeTask(id, type, value){
      const myTasks = tasks;
      const currentTask = myTasks.filter(task => { 
        return task._id == id;
      })
    }

    return (
      <MainContainer>
        {isNewProject ? 
        <HeaderContainer> 
          <Input type="text" id="projectTitle" placeholder="Digite o nome do novo projeto" onChange={onChangeProject}></Input>
          <Button backColor={"#6FCF97"} onClick={saveProject}>Salvar</Button>
        </HeaderContainer> 
        :
        <div>
        <HeaderContainer>
          <Title size="24">{project.name}</Title>
          <RightHeaderContainer>
            <TitleContent padding={10} backColor={'white'}>
              <Title size={14}>{projectStatus.concluidas}/{projectStatus.atrasadas}/{projectStatus.totais}</Title>
            </TitleContent>
            <Button onClick={removeProject} backColor={"#E97451"} innerColor={"white"}>Excluir projeto</Button>
          </RightHeaderContainer>
        </HeaderContainer>
      
     
           <CardsContainer>
           { 
             tasks.map(task => {
             
             return(
               <Task key={task._id}  _id={task._id} description={task.description} owner={task.owner} date={task.dueDate}  closedDate={task.closedDate} closed={task.closed} type={'readOnly'} onCompleteTask={changeTaskStatus}/>
             )
           })}
         </CardsContainer>
      
         <AddNewTask>
           <Button backColor={'#00B9F1'} innerColor={'white'} onClick={OpenClosePopupCreate}>Nova tarefa</Button>
         </AddNewTask>
         </div>
      }
        
     
        {openPopupNewTask ? <TaskPopup projectId={props.id} taskId={""} onClosePopup={OpenClosePopupCreate}/> : <div/>}
      </MainContainer>
    );
  }

