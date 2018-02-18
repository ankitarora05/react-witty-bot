import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {

    render() {
        const messageItems = this.props.messageList.map(function (item) {
            return (
                <li key={item.messageID} className={(item.chatBotName === item.chatBotID ? 'right-text' : 'left-text')}><div className="bubble">{item.message}</div></li>
            );
        });
        return (
            <div className="Chat-window">
                <ul className="Message-list">{messageItems}</ul>
            </div>
        );
    }
}

export default ChatWindow;
