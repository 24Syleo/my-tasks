import React from 'react';
import { ITaskProps } from './TaskProps.interface';
import { Button } from "../../components";
import "./Task.style.css";
import { log } from 'console';

const Task = ({ task, uniqueKey, deleteTask }: ITaskProps) => {

    return (
        <li className='accTask'>
            <input id={`acc${uniqueKey}`} className="hide" type="checkbox" />
            <div className='titleContainer'>
                <label htmlFor={`acc${uniqueKey}`} className="accLabel">{task.title}</label>
                <Button type={'button'} title={'suppr'} size={'small'} color={'danger'} shadow={false} click={() => deleteTask(uniqueKey)} />
            </div>
            <p className='accChild'>{task.description}</p>
        </li>
    );
};

export default Task;