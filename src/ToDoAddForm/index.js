import './ToDoAddForm.css'
import React from 'react'

function ToDoAddForm({onBtCancel, onBtAdd,addedEvent,errorAddedEvent,setErrorAddedEvent}){
    return(
        <form 
            className={`add-form-box ${addedEvent ? "added" : ""}`}
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <label className='add-form-label'>Escribe un nuevo To Do:</label>
            {(errorAddedEvent[0] && errorAddedEvent[2])  && <p className='error-added-ms'>El campo se encuentra vacio</p>}
            {(errorAddedEvent[1] && errorAddedEvent[2]) && <p className='error-added-ms'>Ya este To Do existe, ingresa otro</p>}
            <textarea 
                className='add-form-input' 
                id='add-todo-input'
                placeholder= "Salir a pasear"
                onChange={()=> (setErrorAddedEvent([false,false,false]))}
            >
            </textarea>
            <div className='buttons-div'>
                <button 
                    className="cancel-form-bt"
                    onClick={onBtCancel}
                >
                    Cancel
                </button>
                <button 
                    className="add-form-bt"
                    onClick={onBtAdd}
                >
                    Add
                </button>
            </div>
        </form>
    )

}

export{ ToDoAddForm };