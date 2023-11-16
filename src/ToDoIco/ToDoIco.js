import React from 'react';
import { ReactComponent as CheckSVG } from './Check.svg';
import { ReactComponent as DeleteSVG } from './Delete.svg';

const typeOfIco = {
    Check: (color) => <CheckSVG fill={color}/>,
    Delete: (color) => <DeleteSVG fill={color}/>
}
function ToDoIco({type, color, onClick}){
    return(
        <span
            className={`Icon Icon-svg Icon-${type}`}
            onClick={onClick}
        >
            { typeOfIco[type](color) }        
        </span>
    )
};

export { ToDoIco };