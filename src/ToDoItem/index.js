import './ToDoItem.css'
import React from 'react';
import { CheckIco } from '../ToDoIco/CheckIco.js'
import { DeleteIco } from '../ToDoIco/DeleteIco.js';

function ToDoItem(props) {
    return (
        <li className="todo-item">
            
            <CheckIco
                completed={props.completed}
                onCheckToDo={props.onCheckToDo}
            />

            <p className={`todo-text ${props.completed && "todo-text-completed"}`}>{props.text}</p>
            
            <DeleteIco
                completed={props.completed}
                onDeleteToDo={props.onDeleteToDo}
            />

        </li>
    );
}

export { ToDoItem };