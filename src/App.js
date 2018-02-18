import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import ChatMessage from './ChatMessage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      connectedUser: new Date().getTime()
    }
  }

  componentDidMount() {
    if(localStorage.getItem("chatHistory")) {
      let getMessageHistory = localStorage.getItem("chatHistory");
      this.setState({
        messageList: JSON.parse(getMessageHistory)
      });
    }
  }

  onNewMessage = (val) => {
    this.setState({
      messageList: [...this.state.messageList, val]
    });
    localStorage.setItem("chatHistory", JSON.stringify(this.state.messageList));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chatbot</h1>
        </header>
        <ChatWindow connectedUser={this.state.connectedUser} messageList={this.state.messageList}/>
        <ChatMessage  callbackFromSubmit={this.onNewMessage}/>
      </div>
    );
  }
}

export default App;
