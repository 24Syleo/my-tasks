import React from 'react';
import { ListTasksProps } from './ListTasks.interface';
import { Task } from "../../components";
import "./ListTasks.style.css";

const ListTasks = ({ list }: ListTasksProps) => {

    if (list.tasks.length > 0) {
        return (
            <ul className='acc'>
                {
                    list.tasks.map((t, index) => (
                        <Task task={t} uniqueKey={index} />
                    ))
                }
            </ul>
        );
    } else {
        return (
            <h3>Pas de taches</h3>
        )
    }
};

export default ListTasks;