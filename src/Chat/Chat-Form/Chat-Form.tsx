import React from 'react'
import PropTypes from 'prop-types'
import './Chat-Form.css';
export const Chat_Form = () => {
    return (
        <div id="chat-form">
            {/* <img src={require("../../images/icons/attachment-logo.svg")} alt="Add Attachment" /> */}
            <input type="text" placeholder="type a message" />
        </div>
    )
}


