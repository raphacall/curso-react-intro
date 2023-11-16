import './NewListAddForm.css'
import React from 'react'

function NewListAddForm({onBtCancel, onBtAdd,addedEvent,errorAddedEvent,setErrorAddedEvent}){
    return(
        <form 
            className={`add-list-form-box ${addedEvent ? "added" : ""}`}
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <label className='add-form-label'>Escribe el nombre de una lista nueva de To Dos:</label>
            {(errorAddedEvent[0] && errorAddedEvent[2])  && <p className='error-added-ms'>El campo se encuentra vacio</p>}
            {(errorAddedEvent[1] && errorAddedEvent[2]) && <p className='error-added-ms'>Ya este To Do existe, ingresa otro</p>}
            <input 
                className='add-list-form-input' 
                id='add-list-input'
                placeholder= "Salir a pasear"
                onChange={()=> (setErrorAddedEvent([false,false,false]))}
            >
            </input>
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

export{ NewListAddForm };