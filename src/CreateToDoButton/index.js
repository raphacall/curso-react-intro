import './CreateToDoButton.css'
function CreateToDoButton({onClick}) {
    return (
        <button 
            className='create-todo-button'
            onDoubleClick = { onClick }
        >
                <p className='plus'>+</p><p className='add'>Añadir tarea</p>
        </button>
    );
}

export { CreateToDoButton };