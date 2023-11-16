import React from "react";
import {ToDoIco} from './ToDoIco'

function DeleteIco({onDeleteToDo}) {
    return (
        <ToDoIco
            type="Delete"
            color='gray'
            onClick={onDeleteToDo}
        />
    );
}
export {DeleteIco}