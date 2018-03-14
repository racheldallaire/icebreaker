import React, {Component} from 'react';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class ChatWindow extends Component {

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('current-chat');
    objDiv.scrollTop = objDiv.scrollHeight;
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


