import './ToDoListDiv.css';
import { ToDoTaskList } from '../ToDoTaskList';
import { ToDoDropList } from '../ToDoDropList';
import { ReactComponent as RenameListSVG } from './RenameListSVG.svg';
import { ReactComponent as DeleteListSVG } from './DeleteListSVG.svg';
function ToDoListDiv({item,setSelectList,selectList,children,deleteList,setOpenModal}) {
    return (
        <div 
            className='div-list-todos'
        >
            <ToDoTaskList
                selectList = {selectList}
            >
                {item.map(list => (
                    <ToDoDropList
                        key={list.id}
                        list={list}
                        setSelectList={setSelectList}
                    />
                ))}
            </ToDoTaskList>
            <button 
                className='icon-list-svg'
                onClick={()=> setOpenModal([true,'modalRenameList'])}
            >
                <span><RenameListSVG/></span>
            </button>
            <button
                className='icon-list-svg'
                onClick={()=> deleteList()}
            >
                <span><DeleteListSVG/></span>
            </button>
            {children}
        </div>
    );
}

export { ToDoListDiv };