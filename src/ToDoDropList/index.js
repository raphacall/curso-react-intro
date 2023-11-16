import './ToDoDropList.css'
import React from 'react';

function ToDoDropList({list,setSelectList}) {
    return (
        <li 
            id={list.id}  
            className='option-list' 
            onClick = {() => setSelectList([list.name,list.id])}
        >
            <p className='text-list-todo'>{list.name}</p>
        </li>
    );
}

export { ToDoDropList };