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
    this.chattingWithUser = this.chattingWithUser.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      matches:[],
      messages: [],
      fromMe: true,
      user2: 0,
      hasData: false,
      user2Info: []
    };

  }

  brandNewMessage(message) {
    const newMessage = {type: 'postMessage', currentUser: message.currentUser, content: message.input, fromMe: true};
    this.socket.send(JSON.stringify(newMessage));
  }

chattingWithUser(e){
    console.log("CHAT start new chat with", e)
    this.setState({
       user2: e.target.value
    })
    const that = this
    axios.get(`/api/chat_window/${e.target.value}`, {

      })
      .then(function (response) {
          that.setState({
              hasData: true,
              user2Info: response.data

            })
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // Called after the component was rendered and it was attached to the DOM.
  componentDidMount() {

     axios.get('/api/message_list')
      .then(response => {
        this.setState({
            matches: response.data
        });
        console.log("MESSAGE LIST MATCHED 1", response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

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
      <ChatWindow messages = {this.state.messages} hasData={this.state.hasData}  user2Info={this.state.user2Info}/>
      <MessageList messages = {this.state.messages}  chattingWithUser={this.chattingWithUser} matches = {this.state.matches} />
      <ChatBar defaultValue={this.state.currentUser.name} brandNewMessage={this.brandNewMessage}/>
      </div>
    );
  }
}
export default Chats;