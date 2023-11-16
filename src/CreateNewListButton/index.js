import './CreateNewListButton.css'
function CreateNewListButton({onClick}) {
    return (
        <button 
            className='create-list-button'
            onClick = { onClick }
        >
                <p className='plus'>+</p><p className='add'>Añadir Lista</p>
        </button>
    );
}

export { CreateNewListButton };