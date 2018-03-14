import React, {Component} from 'react';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class ChatWindow extends Component {

   render () {
    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (


    <Col sm={{ size: 7, offset: 5 }} style={{position: 'absolute'}}>
        <div className="right">
            <div className="top">
            <span className="name">Name of User you're chatting with</span>
            </div>

            <div className="chat" data-chat="person5">
                <div className="conversation-start">
                    <span>Today, 6:28 AM</span>
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup for the third time like is <br />you blind bitch
                </div>
            </div>

            <div className="chat" data-chat="person6">
                <div className="conversation-start">
                    <span>Monday, 1:27 PM</span>
                </div>
                <div className="bubble you">
                    She used to call me on her cell phone...
                </div>
                <div className="bubble me">
                    are we seriously gonna do this?
                </div>
                <div className="bubble you">
                   Late night when she needed my love...
                </div>
                <div className="bubble me">
                    pls stop
                </div>
                <div className="bubble you">
                    She broke my heart tho bro like I just can't believe this keeps happening to me
                </div>
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


