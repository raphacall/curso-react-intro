import './ToDoList.css';

function ToDoList(props) {
    return (
        <div className='to-do-list'>
            {props.children}
        </div>
    );
}

export { ToDoList };