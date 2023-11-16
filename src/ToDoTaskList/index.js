import './ToDoTaskList.css'
import React from 'react';
import { ReactComponent as OpenArrowSVG } from './open-arrow.svg';

function ToDoTaskList({selectList,children}) {
    return (
        <div
            className='create-todo-list'
            id='select-list'
        >
            <button className='button-todo-list'><p className='text-list-todo'>{selectList[0]}</p><span><OpenArrowSVG/></span></button>
            <ul className='ul-todo-list'>
                { children }
            </ul>
            
        </div>
    );
}

export { ToDoTaskList };