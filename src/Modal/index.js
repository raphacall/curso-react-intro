import './Modal.css'
import React from 'react';
import ReactDOM from 'react-dom';

function  Modal({children, addedEvent}) {
    return ReactDOM.createPortal(
        <div className={`Modal ${addedEvent ? "off": ""}`}>
            { children }
        </div>,
        document.getElementById('modal')
    );
}
export { Modal}
