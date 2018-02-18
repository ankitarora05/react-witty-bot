import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {
    
    render() {
        const connectedUser = this.props.connectedUser;
        const messageItems = this.props.messageList.map(function (item) {
            return (
                <li className={(connectedUser ? 'show' : 'hidden')}>{item.message}</li>
            );
        });
        return (
            <div className="Chat-window">
                <ul>{messageItems}</ul>
            </div>
        );
    }
}

export default ChatWindow;
