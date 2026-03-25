import React from 'react';
import { IToDo } from '../types/data';

interface IToDoItem extends IToDo {
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

const ToDoItem: React.FC<IToDoItem> = (props) => {
    const {id, note, isComplited, toggleToDo, removeToDo} = props;

    return <li className="todo-item">
        <input type='checkbox' checked={isComplited} onChange={() => toggleToDo(id!)}></input>
        <label className={isComplited ? 'completed' : ''}>{note}</label>
        <button className="remove-btn" onClick={() => removeToDo(id!)}>x</button>
    </li>
}

export { ToDoItem }
