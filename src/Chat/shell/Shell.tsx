import React from 'react'
import { Chat_title } from '../chat-title';
import { Chat_Form } from '../Chat-Form';
import './chat-shell.css';

export const Shell = () => {
    return (
        <div id="chat-container">
            <Chat_title></Chat_title>
            <Chat_Form></Chat_Form>
        </div>
    )
}

Shell.propTypes = {

}



