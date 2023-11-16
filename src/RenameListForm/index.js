import './RenameListForm.css'
import React from 'react'

function RenameListForm({onBtCancel,onBtAdd,addedEvent,errorAddedEvent,setErrorAddedEvent}){
    return(
        <form 
            className={`rename-list-form-box ${addedEvent ? "added" : ""}`}
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <label className='rename-form-label'>Escribe un nuevo nombre para tu lista:</label>
            {(errorAddedEvent[0] && errorAddedEvent[2])  && <p className='error-added-ms'>El campo se encuentra vacio</p>}
            {(errorAddedEvent[1] && errorAddedEvent[2]) && <p className='error-added-ms'>Ya este To Do existe, ingresa otro</p>}
            <input 
                className='rename-list-form-input' 
                id='rename-list-input'
                placeholder= "Nueva Lista"
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
                    Rename
                </button>
            </div>
        </form>
    )

}

export{ RenameListForm };