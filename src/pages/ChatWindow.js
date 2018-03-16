import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserTimes } from '@fortawesome/fontawesome-free-solid'


export default class ChatWindow extends Component {
    constructor(props) {
    super(props);
    this.state = {
        content: ""
        }
    this.removeFromFriendArray = this.removeFromFriendArray.bind(this);
    }

  componentDidMount(e, props){

    }

  removeFromFriendArray(e){
    console.log("Remove from Friends clicked")
    var data = []
      data = this.props.user2
        this.setState({

            user2: data.splice(1)
        });
    axios.post('/api/friendremoved', {
        user2: this.state.user2[0].id,
      })
      .then(function (response) {
        console.log("has been removed",  response);
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
            <Button alt="Remove Friend" onClick={this.removeFromFriendsArray}  className="unfriend"><FontAwesomeIcon icon={faUserTimes} /></Button></span>
            </span>
            </div>

    }  else {
      chattingWith =
          <div className="top">
            <div style={{color: '#999', textAlign: 'center'}}>Select a friend to start chatting!
            <p><i>No friends yet? <a href="/Potentials">Go make some!</a></i></p>
            </div>
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

                <div className="conversation-start"><span/></div>

                    {messages}

            </div>

        </div>
    </Col>


    )
  }
}


