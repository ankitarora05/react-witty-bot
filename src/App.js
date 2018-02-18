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

  onNewMessage = (val) => {
    this.setState({
      messageList: [...this.state.messageList, val]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chatbot</h1>
        </header>
        <ChatWindow connectedUser={this.state.connectedUser} messageList={this.state.messageList}/>
        <ChatMessage onNewMessage={this.onNewMessage}/>
      </div>
    );
  }
}

export default App;
