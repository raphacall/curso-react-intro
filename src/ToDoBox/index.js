import './ToDoBox.css';

function ToDoBox(props) {
    return (
        <div 
            className='box-list-todos'
        >
            {props.children}
        </div>
    );
}

export { ToDoBox };