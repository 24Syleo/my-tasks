import React from 'react';
import { IInput } from './Input.interface';
import "./Input.style.css";

const Input = ({ type, value, change, placeholder, name }: IInput) => {
    return (
        <div className='containerInput'>
            <input type={type} value={value} onChange={change} placeholder={placeholder} name={name} className='inputField' />
        </div>
    );
};

export default Input;