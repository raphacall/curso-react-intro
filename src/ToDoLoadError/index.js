import './ToDoLoadError.css'
import React from 'react';
import { ReactComponent as LogoSVG } from './ToDoLogo.svg';

function ToDoLoadError() {
    return (
        <span className='todo-load-error'>
            <LogoSVG />
            <h2>Ha ocurrido un error!</h2>
        </span>
    );
}

export { ToDoLoadError };