import React from 'react';
import { ITaskProps } from './TaskProps.interface';
import "./Task.style.css";

const Task = ({ task, uniqueKey }: ITaskProps) => {

    return (
        <li className='accTask'>
            <input id={`acc${uniqueKey}`} className="hide" type="checkbox" />
            <label htmlFor={`acc${uniqueKey}`} className="accLabel">{task.title}</label>
            <p className='accChild'>{task.description}</p>
        </li>
    );
};

export default Task;