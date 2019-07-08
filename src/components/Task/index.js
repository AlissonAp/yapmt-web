import React, { useState, useEffect } from 'react';
import { TitleContent, Title, Button, Input } from '../../styles';
import { MainContainer, CenterContainer, FooterContainer, LeftContainer, CheckBox } from './styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from 'date-fns/locale/pt';
import { registerLocale } from "react-datepicker";
import { format, distanceInWordsToNow, distanceInWords, isAfter } from 'date-fns'

registerLocale('pt', pt)

export default function Task(props) {
    const { _id, description, owner, date, closed, closedDate } = props;
    const [datePicker, setDatePicker] = useState("");
    const [task, setTask] = useState({
        _id,
        description: description || "",
        owner: owner || "",
        dueDate: date,
        closedDate: closedDate,
        closed: closed || false
    });

    function onChange(e) {
        debugger;
        let value = "";
        e.target.value == 'on' && e.target.type == 'checkbox' ? value = e.target.checked : value = e.target.value

        let currentTask = {
            ...task,
            [e.target.id]: value
        }

        setTask(currentTask)

        if (e.target.type == 'checkbox' && props.type == 'readOnly') {
            let currentTask = {
                ...task,
                closed: value,
                closedDate: format(new Date().toString(), "YYYY-MM-DDTHH:mm")
            }
            setTask(currentTask)
            props.onCompleteTask(currentTask)
        }

    }

    function dateChange(date) {
        debugger;
        setDatePicker(date);

        let dateFormat = date.toString();
        let currentTask = {
            ...task,
            dueDate: format(dateFormat, "YYYY-MM-DDTHH:mm")
        }

        setTask(currentTask)

    }

    function timeInWords(dateString) {

        let distancia = "" 
       

        let description = "";

        //Check if conclusion date is after expires time
        if (!isAfter(new Date(dateString), new Date(task.closedDate))) {

            distancia = distanceInWordsToNow(
                new Date(dateString),
                { locale: pt }
            )

            if (isAfter(new Date(dateString), new Date())) {
                description = "Vence em " + distancia;
            } else {
                description = "Venceu a " + distancia;
            }
        } else {
            distancia = distanceInWords(
                new Date(dateString),
                new Date(task.closedDate),
                { locale: pt }
            )

            description = "Concluido com "+distancia+ " de atraso!" 
        }

        return description;

    }

    function onSave() {
        debugger;
        props.onSubmit(task)
    }


    return (

        <MainContainer color={task.closed ? "#6FCF97" : "white"}>
            {props.type == 'editable' ?
                <div>
                    <Input id="description" size="14" color="black" type="text" renderType={props.type} value={task.description} placeholder={'Descricao'} onChange={onChange} />
                    <Input id="owner" size={12} color="blue" type="text" renderType={props.type} value={task.owner} placeholder={'Proprietario'} onChange={onChange} />
                    <DatePicker style={{ 'border': '0px' }} showTimeSelect timeFormat="HH:mm" timeIntervals={15} id="dueDate" placeholderText="Prazo de conclusão" onChange={dateChange} dateFormat="dd/MM/yyyy" selected={datePicker} dateFormat="Pp" />
                    <LeftContainer>
                        <Button onClick={onSave} backColor={'#6FCF97'} innerColor={'black'}>Salvar</Button>
                    </LeftContainer>

                </div>
                :
                <div>
                    <CenterContainer>
                        <CheckBox id="closed" type="checkbox" renderType={props.type} checked={task.closed} onChange={onChange} />
                        <TitleContent padding="4">
                            <Title textDecorate={task.closed ? 'line-through' : ''} size="14" color="black">{task.description}</Title>
                        </TitleContent>
                    </CenterContainer>
                    <FooterContainer>
                        <Title size={12} color="blue">@{task.owner}</Title>

                        <TitleContent backColor={isAfter(new Date(task.dueDate), new Date()) ? '#6FCF97' : '#DD1F13'} padding={5}>
                            <Title size={10} color={'white'}>{timeInWords(task.dueDate)}</Title>
                        </TitleContent>

                    </FooterContainer>
                </div>

            }
        </MainContainer>




    )
}

