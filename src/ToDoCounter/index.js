import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';
function ToDoCounter() {
    const {toDos , toDoF : completed} = React.useContext(ToDoContext);
    const total = toDos.length;
    
    if(completed === 0 && total === 0){
        return (
            <h1>
                ¡No hay To Do's! <br /> 
            </h1>
        )
    } else if (completed === total){
        return (
            <h1>
                ¡Haz completado  todos los To Dos! <br />{total} Completados
            </h1>
        ) 
    }
    else{
        return (
            <h1>
                {completed}/{total} Completados
            </h1>   
        );
    };
};


export { ToDoCounter };