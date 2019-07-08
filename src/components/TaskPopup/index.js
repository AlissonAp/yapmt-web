import React, { useState, useEffect} from 'react';
import { MainContainer, Popup, PopupInner, TopButton} from './styles';
import { Button } from '../../styles';
import Task from '../Task';
import api from '../../services/api';


export default function TaskPopup(props) {
    const [task, setTask] = useState({});

    useEffect(()=>{
        if(!task.dueDate){
            setTask({
                dueDate : new Date()
            })
        }
    })   

    async function onCreateSaveTask(task){
        debugger;
        let response = {};
        if(props.taskId){
            response = await api.put(`projects/${props.projectId}/tasks/${props.taskId}`,task)
        }else{
            response = await api.post(`projects/${props.projectId}/tasks`,task)
        }    
           
        if(response.status !== 201 && response.status !== 200){
            alert("Falha ao criar a tarefa!")
        }else{
           props.onClosePopup(true)
        }
    }

      
  return (
    <MainContainer>
        <Popup>
            <PopupInner>
                <Task key={task._id} title={task.description} owner={task.owner} date={task.dueDate} type={'editable'} closed={task.closed} onSubmit={onCreateSaveTask} />
                <TopButton>
                    <Button onClick={props.onClosePopup} backColor={'transparent'} innerColor={'red'}>X</Button>
                </TopButton>
            </PopupInner>
        </Popup>
    </MainContainer>
  );
}
