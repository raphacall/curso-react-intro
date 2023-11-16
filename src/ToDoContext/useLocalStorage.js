import React from "react";

function useLocalStorage(itemName, initialValue){
  const [item,setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [selectList, setSelectList] = React.useState([item[0].name,0]);

  React.useEffect(() => {
    setTimeout(() => {

      try {

        const localStorageToDos = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageToDos){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          setSelectList([item[0].name,0]);
        }else{
          parsedItem = JSON.parse(localStorageToDos);
          setItem(parsedItem);
          
          
        }
        setLoading(false);
        
      }

      catch(error){

        setLoading(false);
        setError(true);
      
      }
      
    
    },2000);
  },[]);

  const saveItem = (newItem) => {

    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);

  };
  

  return {item, saveItem, loading, error, selectList, setSelectList};
}

export {useLocalStorage};

/*const defaultToDos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Sacar al Perro', completed: false},
  {text: 'Hacer Ejercicio', completed: false},
  {text: 'Practicar React1', completed: false},
  {text: 'Practicar React', completed: true}
]

localStorage.setItem('toDos_V1', JSON.stringify(defaultToDos));
/*localStorage.removeItem('toDos_V1');*/