import './ToDoBody.css';
function ToDoBody(props) {
    return (
        <div className={`container ${props.openModal ? "blur" : ""} ${props.addedEvent ? "offBlur": ""}`}>
            {props.children}
        </div>
    );
}

export { ToDoBody };