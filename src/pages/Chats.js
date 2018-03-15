import React, {Component} from 'react';
import MessageList from './MessageList.js';
import ChatBar from './ChatBar.js';
import ChatWindow from './ChatWindow.js';
import axios from 'axios';

class Chats extends Component {
// Set initial state so the user is initially anonymous
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws:localhost:3001');
    this.brandNewMessage = this.brandNewMessage.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: [],
      fromMe: true
    };
  }

  brandNewMessage(message) {
    const newMessage = {type: 'postMessage', currentUser: message.currentUser, content: message.input, fromMe: true};
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
    axios.get('/api/chat_user')
    .then(response => {
      console.log("chat_user ", response.data[0].first_name);
      this.setState({ currentUser: {user: response.data[0].first_name} });
    })
    .catch(function (error) {
      console.log(error);
    });

    // axios.get('/api/message_list')
    // .then(response => {
    //     this.setState({
    //         hasData: true,
    //         matchedUsers: response.data
    //     });
    // console.log("MESSAGE LIST MATCHED USERS response.data", response.data)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
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