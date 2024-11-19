import React from 'react';
import { ITextArea } from './TextArea.interface';
import "./TextArea.style.css";
const TextArea = ({ value, change, placeholder, name }: ITextArea) => {
    return (
        <textarea
            value={value}
            onChange={change}
            placeholder={placeholder}
            className="textArea"
            name={name}
        />
    );
};

export default TextArea;