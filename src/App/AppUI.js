import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoBox } from '../ToDoBox';
import { ToDoList } from '../ToDoList';
import { ToDoListNoCompleted } from '../ToDoListNoCompleted';
import { ToDoItem } from '../ToDoItem'
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoBody } from '../ToDoBody';
import { ToDoLoadAnimation } from '../ToDoLoadAnimation';
import { ToDoLoadError } from '../ToDoLoadError';
import { ToDoLoadNoItem } from '../ToDoLoadNoItem'
import { ToDoContext } from '../ToDoContext';
import { ToDoAddForm } from '../ToDoAddForm';
import { Modal } from '../Modal';
import { NewListAddForm } from '../NewListAddForm';
import { CreateNewListButton } from '../CreateNewListButton';
import { ToDoListDiv } from '../ToDoListDiv';
import { RenameListForm } from '../RenameListForm';


function AppUI(){
    const {
        loading, 
        error, 
        filterToDosCompleted,
        filterToDosNoCompleted, 
        checkToDo, 
        deleteToDo,
        item,
        toDos,
        addedEvent,
        openModal,
        setOpenModal,
        addToDo,
        addList,
        newToDoAdded,
        newListAdded,
        errorAddedEvent,
        setErrorAddedEvent,
        setSelectList,
        selectList,
        setAddedEvent,
        deleteList,
        renameList

    } = React.useContext(ToDoContext);
    return (
        <ToDoBody
            openModal={openModal[0]}
            addedEvent={addedEvent}
        >
            <ToDoCounter />
            {toDos.length >0 && <ToDoSearch />}
                <ToDoBox>
                    <ToDoListDiv
                        item={item}
                        setSelectList={setSelectList}
                        selectList={selectList} 
                        deleteList={deleteList}  
                        setOpenModal={setOpenModal}
                        renameList={renameList}
                    >      
                        <CreateNewListButton 
                            onClick={()=> setOpenModal([true,'modalList'])}
                        />
                    </ToDoListDiv>
                    <ToDoList>
                        {loading && <ToDoLoadAnimation />}
                        {error && <ToDoLoadError />}
                        {(!loading && toDos.length === 0) && <ToDoLoadNoItem/>}
                        <ToDoListNoCompleted>
                            {(filterToDosNoCompleted.length > 0 || (filterToDosNoCompleted.length === 0 && filterToDosCompleted.length > 0)) && <p className='p-title'>No completados</p>}
                            {(filterToDosNoCompleted.length === 0 && filterToDosCompleted.length > 0) && <p className='p-add-todo'>Agrega un nuevo To Do</p>}
                            {filterToDosNoCompleted.map(toDo => (
                                <ToDoItem 
                                    key={toDo.text}
                                    text={toDo.text}
                                    completed={toDo.completed}
                                    onCheckToDo={() => checkToDo(toDo.text)}
                                    onDeleteToDo={() => deleteToDo(toDo.text)}
                                />
                            ))}
                        </ToDoListNoCompleted>
                        <ToDoListNoCompleted>
                            {filterToDosCompleted.length > 0 && <p className='p-title'>Completados</p>}
                            {filterToDosCompleted.map(toDo => (
                                <ToDoItem 
                                    key={toDo.text}
                                    text={toDo.text}
                                    completed={toDo.completed}
                                    onCheckToDo={() => checkToDo(toDo.text)}
                                    onDeleteToDo={() => deleteToDo(toDo.text)}
                                />
                            ))}
                        </ToDoListNoCompleted>
                    </ToDoList>
                    <CreateToDoButton 
                        onClick={()=> setOpenModal([true,'modalTodo'])}
                    />
                </ToDoBox>
                    {openModal[0] && (
                        <Modal
                            addedEvent={addedEvent}
                        >
                            {openModal[1] === 'modalTodo'  && (
                            <ToDoAddForm 
                                onBtAdd={()=> addToDo(newToDoAdded())}
                                onBtCancel={()=> {
                                    setAddedEvent(true);
                                    setTimeout(()=>{
                                        setAddedEvent(false);
                                        setOpenModal([false,'modalTodo'])
                                    },800)}
                                    }
                                addedEvent={addedEvent}
                                errorAddedEvent={errorAddedEvent}
                                setErrorAddedEvent={setErrorAddedEvent}
                            />)}
                            {openModal[1] === 'modalList' && (
                            <NewListAddForm 
                                onBtAdd={()=> addList(newListAdded())}
                                onBtCancel={()=> {
                                    setAddedEvent(true);
                                    setTimeout(()=>{
                                        setAddedEvent(false);
                                        setOpenModal([false,'modalTodo'])
                                    },800)}
                                    }
                                addedEvent={addedEvent}
                                errorAddedEvent={errorAddedEvent}
                                setErrorAddedEvent={setErrorAddedEvent}
                            />
                            )}
                            {openModal[1] === 'modalRenameList' && (
                            <RenameListForm
                                onBtAdd={()=>renameList()}
                                onBtCancel={()=> {
                                    setAddedEvent(true);
                                    setTimeout(()=>{
                                        setAddedEvent(false);
                                        setOpenModal([false,'modalTodo'])
                                    },800)}
                                    }
                                addedEvent={addedEvent}
                                errorAddedEvent={errorAddedEvent}
                                setErrorAddedEvent={setErrorAddedEvent}
                            />
                            )}
                        </Modal>
                    )}
                    
        </ToDoBody>
    );}
export { AppUI };