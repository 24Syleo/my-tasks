import React from 'react';
import { ListTasksProps } from './ListTasks.interface';
import { Task } from "../../components";
import "./ListTasks.style.css";

const ListTasks = ({ list, updateTasks }: ListTasksProps) => {
    const supprTask = (id: number) => {
        const updatedTasks = list.tasks.filter((_, index) => index !== id); // Filter tasks
        const updatedList = { ...list, tasks: updatedTasks }; // Create updated object
        updateTasks(updatedList); // Call parent function to update
    };

    return (
        <ul className='acc'>
            {list.tasks.map((t, index) => (
                <Task task={t} uniqueKey={index} key={index} deleteTask={() => supprTask(index)} />
            ))}
        </ul>
    );
};

export default ListTasks;
