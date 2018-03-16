import React, {Component} from 'react';
import axios from 'axios';
// import Message from './Message.js';
import { Button, Col, Container, Row , Alert } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserTimes } from '@fortawesome/fontawesome-free-solid'


export default class ChatWindow extends Component {
    constructor(props) {
    super(props);
    this.state = {
        content: ""
        }
    }

  componentDidMount(e, props){

    }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('current-chat');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

   render () {

    var chattingWith = "You have no Matches to Chat with";
    if (this.props.hasData) {
    var user= this.props.user2Info[0]
    console.log("Chatting with ", this.props.user2Info[0])

        chattingWith =
            <div className="top">
            <span>
            <img src={user.facebook_picture_url}  className="chatimg" />
            <span className="name">{user.first_name}  {user.last_name}</span>
             <span className="removeUser">
            <Button alt="Remove Friend" onClick={this.props.removeFromFriends}  className="unfriend"><FontAwesomeIcon icon={faUserTimes} /></Button></span>
            </span>
            </div>

    }  else {
      chattingWith =
          <div className="top">
            <span>
            <span className="name">CLICK a friend in your MATCH LIST to open a chat</span>
            </span>
            </div>
     }


    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (


    <Col sm={{ size: 7, offset: 5 }} style={{position: 'absolute', overflow: 'scroll', height: '80%'}} id="current-chat">
        <div className="right">

             {chattingWith}

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


