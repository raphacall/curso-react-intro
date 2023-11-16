import React from 'react';
import { ToDoIco } from "./ToDoIco";

function CheckIco({completed, onCheckToDo}) {
    return(
        <ToDoIco
            type='Check'
            color={completed ? '#13436D' : 'gray'}
            onClick={onCheckToDo}
        />
    );
}

export {CheckIco};