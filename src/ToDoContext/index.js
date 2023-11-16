import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState([false,'modalTodo']);
    const [addedEvent, setAddedEvent] = React.useState(false);
    const [errorAddedEvent, setErrorAddedEvent] = React.useState([false,false,false]);
    const [nClick, setNClick] = React.useState([0,0,0]);
    const {
        item, 
        saveItem: saveToDos,
        loading,
        error,
        selectList,
        setSelectList
      } = useLocalStorage('General',[{id:0,name:'Nueva lista',toDos:[]}]);

      const toDos = item[selectList[1]].toDos;
      const toDoF = toDos.filter(todo => todo.completed).length;
      

      const act =() =>{
        setSelectList([item[0].name,0]);
      }
      React.useEffect(() => {
        act();
      },[loading,]);

      const checkToDo = (key) => {
        const newToDos = [...toDos];
        const newToDosList = [...item];
        const todoIndex = toDos.findIndex(todo => todo.text === key);
        newToDos[todoIndex].completed = !newToDos[todoIndex].completed;
        newToDosList[selectList[1]] = {id:selectList[1],name:selectList[0],toDos:[...newToDos]}; 
        saveToDos(newToDosList);
      }
      
      const deleteToDo = (key) => {
        const newToDos = [...toDos];
        const newToDosList = [...item];
        const todoIndex = toDos.findIndex(todo => todo.text === key);
        newToDos.splice(todoIndex, 1);
        newToDosList[selectList[1]] = {id:selectList[1],name:selectList[0],toDos:[...newToDos]}; 
        saveToDos(newToDosList);
      }

      const addToDo = (newToDo) =>{
        if(newToDo.text === ""){
          setErrorAddedEvent([true,false,true])
        }
        else if(toDos.find((todo)=> todo.text === newToDo.text)){
          setErrorAddedEvent([false,true,true])
        }
        else{
          setAddedEvent(true);
          setErrorAddedEvent([false,false,false])
          const newToDos = [...toDos];
          const newToDosList = [...item];
          newToDos.push(newToDo);
          newToDosList[selectList[1]] = {id:selectList[1],name:selectList[0],toDos:[...newToDos]};        
          saveToDos(newToDosList);
          setTimeout(()=>{
            setAddedEvent(false)
            setOpenModal([false,'modalTodo'])
          },800);
        }
      }
      const addList = (newList) =>{
        if(newList.name === ""){
          setErrorAddedEvent([true,false,true])
        }
        else if(item.find((list)=> list.name === newList.name)){
          setErrorAddedEvent([false,true,true])
        }
        else{
          setAddedEvent(true);
          setErrorAddedEvent([false,false,false])
          const newToDosList = [...item];
          newToDosList.push(newList);
          saveToDos(newToDosList);
          setSelectList([newList.name,newList.id])
          setTimeout(()=>{
            setAddedEvent(false)
            setOpenModal([false,'modalTodo'])
          },800);
        }
      }

      const deleteList = () =>{
        const newToDosList = [...item];
        const itemIndex = newToDosList.findIndex(list => list.id === selectList[1]);
        newToDosList.splice(itemIndex,1);
        if(newToDosList.length === 0){
          newToDosList.push({id:0,name:'Nueva lista',toDos:[]});
        }
        saveToDos(newToDosList);
        act();
      }

      const renameList = () =>{
        
        const newToDosList = [...item];
        const itemIndex = newToDosList.findIndex(list => list.id === selectList[1]);
        const newName = document.getElementById('rename-list-input').value;
        if(newName === ""){
          setErrorAddedEvent([true,false,true])
        }
        else if(item.find((todo)=> todo.name === newName)){
          setErrorAddedEvent([false,true,true])
        }
        else{
        newToDosList[itemIndex] = {id:itemIndex,name:newName,toDos:newToDosList[itemIndex].toDos}
        saveToDos(newToDosList);
        setAddedEvent(true);
        setTimeout(()=>{
          setAddedEvent(false)
          setOpenModal([false,'modalTodo'])
        },800);
        setSelectList([newName,itemIndex])
      }
      }
      
      const newToDoAdded = () => {
        const inputValue = document.getElementById('add-todo-input').value;
        const todoAdded = {text:inputValue, completed:false}
        return todoAdded;
      }
      const newListAdded = () => {
        const inputValue = document.getElementById('add-list-input').value;
        const listAdded = {id:item.length,name:inputValue,toDos:[]}
        return listAdded;
      }
      
      const filterToDos = toDos.filter(
        (toDo) => {
          const filters = toDo.text.toLowerCase().includes(searchValue.toLowerCase());
          return filters;
        });

      const filterToDosCompleted = filterToDos.filter(
        (toDo) => {
          const filters1 = toDo.completed;
          return filters1;
        });
      const filterToDosNoCompleted = filterToDos.filter(
        (toDo) => {
          const filters2 = !(toDo.completed)
          return filters2;
        });
        

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            item,
            toDos,
            addedEvent,
            toDoF,
            searchValue,
            setSearchValue,
            saveToDos,
            checkToDo,
            deleteToDo,
            filterToDosCompleted,
            filterToDosNoCompleted,
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
            renameList,
            nClick,
            setNClick
        }}>
            { children }
        </ToDoContext.Provider>
    );
}
    export{ ToDoContext, ToDoProvider }







