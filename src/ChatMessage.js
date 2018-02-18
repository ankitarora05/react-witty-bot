import React, { Component } from 'react';
import './App.css';

class ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleTextChange = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if(code === "13") {
            this.onSubmit(e);
        } else {
            this.setState({ message: e.target.value });
        }
    }

    onSubmitAction = (e) => {
        let userMessage = this.state.message;
        if (userMessage) {
            let newMessage = {"messageID": new Date().getTime(),  "chatBotName": this.props.connectedUser, "chatBotID": this.props.connectedUser, "message": userMessage, "emotion": null }
            this.props.onNewMessage(newMessage);
            this.setState({
                message: ''
            });
            /* let url = new URL('https://www.personalityforge.com/api/chat/');
                /*params = {
                    apiKey:​ '​6nt5d1nJHkqbkphe',
                    chatBotID:​ ​63906,
                    externalID:​ ​this.props.connectedUser,
                    message:​ ​e.target.value
                },
                
            //Object.keys(params).forEach(key => url.searchParams.append(key, params[key])).
            fetch(url).then(function (response) {
                if (response.success) {
                    this.props.onNewMessage(response.message);
                }
            }); */
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
                        onChange={this.handleTextChange} />
                    <button onClick={this.onSubmitAction.bind(this)}>Send</button>
                </div>

            </div>
        );
    }
}

export default ChatMessage;
