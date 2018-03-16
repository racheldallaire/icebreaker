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
     this.removeFromFriendsArray = this.removeFromFriendsArray.bind(this);
    }


    // componentDidMount(e){
    //   axios.get('/api/chat_window')
    //   .then(response => {
    //         console.log(response.data)
    //     this.setState({
    //         // first_name: response.data[0].first_name,
    //         // last_name: response.data[0].last_name,
    //         // age: response.data[0].age,
    //         // gender: response.data[0].gender,
    //         // description: response.data[0].description,
    //         // fb_pic: response.data[0].facebook_picture_url
    //     });
    //   })
    //   .catch(function (error) {
    //   console.log(error);
    //   });
    // }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('current-chat');
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  removeFromFriendsArray(e){
    console.log("remove from Friends clicked")
    var data = []
      data = this.state. matches
        this.setState({
            hasData: true,
            matches: data.splice(1)
        });
    axios.post('/api/friendremoved', {
        user2: this.state.matches[0].id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
   render () {
    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (


    <Col sm={{ size: 7, offset: 5 }} style={{position: 'absolute', overflow: 'scroll', height: '80%'}} id="current-chat">
        <div className="right">
            <div className="top">
            <span>
            <img src="https://s16.postimg.org/ete1l89z5/img5.jpg" className="chatimg" />
            <span className="name">Michael Jordan</span>
            <span className="removeUser">
            <Button alt="Remove Friend" onClick={this.removeFromFriendsArray}  className="unfriend"><FontAwesomeIcon icon={faUserTimes} /></Button></span>
            </span>
            </div>

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


