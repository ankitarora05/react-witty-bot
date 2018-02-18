import React, { Component } from 'react';
import './App.css';

class ChatMessage extends Component {
    constructor(props) {
        super(props);
    }
    update = (e) => {
        let url = new URL('https://www.personalityforge.com/api/chat/'),
            /*params = {
                apiKey:​ '​6nt5d1nJHkqbkphe',
                chatBotID:​ ​63906,
                externalID:​ ​this.props.connectedUser,
                message:​ ​e.target.value
            },*/
            newMessage = { "chatBotName": this.props.connectedUser, "chatBotID": this.props.connectedUser, "message": e.target.value, "emotion": null }
        this.props.onNewMessage(newMessage);
        //Object.keys(params).forEach(key => url.searchParams.append(key, params[key])).
        fetch(url).then(function(response){
            if(response.success) {
                this.props.onNewMessage(response.message);
            }
        });
    };
    render() {
        return (
            <div className="Chat-message">This is where you can send a new message</div>
        );
    }
}

export default ChatMessage;
