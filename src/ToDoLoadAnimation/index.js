import './ToDoLoadAnimation.css'
import React from 'react';
import { ReactComponent as LogoSVG } from './ToDoLogo.svg';

function ToDoLoadAnimation() {
    return (
        <span className='todo-load-animation'>
            <LogoSVG />
        </span>
    );
};

export { ToDoLoadAnimation };