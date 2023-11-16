import './ToDoLoadNoItem.css'
import React from 'react';
import { ReactComponent as LogoSVG } from './ToDoLogo.svg';

function ToDoLoadNoItem() {
    return (
        <span className='todo-load-no-todo'>
            <LogoSVG />
            <h2>Crea un nuevo To Do!</h2>
        </span>
    );
};

export { ToDoLoadNoItem };