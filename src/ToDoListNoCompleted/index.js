import './ToDoListNoCompleted.css';

function ToDoListNoCompleted(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
}
export { ToDoListNoCompleted };