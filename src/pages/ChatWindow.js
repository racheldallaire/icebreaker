import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';
import MessageList from './MessageList.js';

export default class ChatWindow extends Component {
    constructor(props) {
    super(props);
    this.state = {
        content: "",
        chatting_with: []
        }
     this.removeFromFriendArray = this.removeFromFriendArray.bind(this);
    }

  componentDidMount(e, props){
      axios.get('/api/chat_window')
       console.log("chat_window", response.data  )
      .then(response => {
        this.setState({
            hasData: true,
            chatting_with: response.data

        });
        console.log("response.data", response.data)
      })
    }

  removeFromFriendArray(e){
    console.log("remove from Potentials clicked")
    var data = []
      data = this.state.potentials
        this.setState({
            hasData: true,
            chatting_with: data.splice(1)
        });
    axios.post('/api/friendremoved', {
        user2: this.state.chatting_with[0].id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('current-chat');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

   render () {


    var chatting_with = 'You are not chatting wth anyone yet';

    if (this.state.hasData) {
         var user= this.state.chatting_with[0]
        chatting_with =
               <div className="top">
            <span>
            <img src={user.facebook_picture_url}  className="chatimg" />
            <span className="name">{user.first_name}  {user.last_name}</span>
            </span>
            </div>
    }  else if
      (this.state.matches.length < 0){
      chatting_with = 'Sorry, You have no Matches to chat with';
     }

    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (


    <Col sm={{ size: 7, offset: 5 }} style={{position: 'absolute', overflow: 'scroll', height: '80%'}} id="current-chat">
        <div className="right">

             {chatting_with}

            <div className="active-chat">

                <div className="conversation-start">
                    <p/><span>Today, 6:28 AM</span>
                </div>

                    {messages}

            </div>

        </div>
    </Col>


    )
  }
}


