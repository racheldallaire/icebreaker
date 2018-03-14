import React, {Component} from 'react';
import MessageList from './MessageList.js';
import ChatBar from './ChatBar.js';
import ChatWindow from './ChatWindow.js';

class Chats extends Component {
// Set initial state so the user is initially anonymous
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws:localhost:3001');
    this.brandNewMessage = this.brandNewMessage.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: [],
    };
  }

  brandNewMessage(message) {
    const newMessage = {type: 'postMessage', currentUser: message.currentUser, content: message.input};
    this.socket.send(JSON.stringify(newMessage));
  }

  // Called after the component was rendered and it was attached to the DOM.
  componentDidMount() {
    this.socket.onopen = (event) => {
      console.log('Connected to server')
     }
    this.socket.onmessage = (event) => {
    const newMess = JSON.parse(event.data)
    const messages = this.state.messages.concat(newMess);
    this.setState({messages: messages});
    }
  }

  // Called any time the props or state changes. The JSX elements returned in this method will be rendered to the DOM.
  render() {
    return (
      <div>
      <ChatWindow messages = {this.state.messages} />
      <MessageList messages = {this.state.messages} />
      <ChatBar defaultValue={this.state.currentUser.name} brandNewMessage={this.brandNewMessage}/>
      </div>
    );
  }
}
export default Chats;