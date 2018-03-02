import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({ message: e.target.value });
        e.preventDefault();
    }

    submitEnter = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) {
            this.onSubmitAction(e);
        } else {
            return;
        }
    }

    onSubmitAction = (e) => {
        const userMessage = this.state.message;
        const connectedUser = this.props.connectedUser;
        if (userMessage) {
            const newMessage = { "messageID": new Date().getTime(), "chatBotName": connectedUser, "chatBotID": connectedUser, "message": userMessage, "emotion": null }
            this.props.callbackFromSubmit(newMessage);
            this.setState({
                message: ''
            });
            axios.get('https://www.personalityforge.com/api/chat/', { params: {
                apiKey: '6nt5d1nJHkqbkphe', 
                chatBotID: '​63906', 
                externalID: "ankit", 
                message: e.target.value
            }}).then((response) => {
                let resp = response.data
                if (resp.success) {
                    resp.message["messageID"] =  new Date().getTime();
                    this.props.callbackFromSubmit(resp.message);
                }
            }).catch((error) =>{
                console.log(error);
            });
        } else {
            return false;
        }

    };
    
    render() {
        return (
            <div className="Chat-message">
                <div className="Form-container">
                    <input
                        type='text'
                        placeholder='Say something...'
                        value={this.state.message}
                        onChange={this.handleTextChange.bind(this)} onKeyPress={this.submitEnter.bind(this)} />
                    <button onClick={this.onSubmitAction.bind(this)}>Send</button>
                </div>

            </div>
        );
    }
}

export default ChatMessage;
