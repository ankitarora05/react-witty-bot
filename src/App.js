import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import ChatMessage from './ChatMessage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chatbot</h1>
        </header>
        <ChatWindow/>
        <ChatMessage/>
      </div>
    );
  }
}

export default App;
