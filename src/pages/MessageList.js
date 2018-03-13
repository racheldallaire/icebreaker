import React, {Component} from 'react';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class MessageList extends Component {

   render () {
    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (

    <div>
    <Container fluid>
    <Row>
    <Col sm="5">
        <div className="left">

            <div className="top">
                <input type="text" />
                <a href="javascript:;" className="search"></a>
            </div>

            <ul className="people">

                <li className="person" data-chat="person5">
                    <img src="https://s16.postimg.org/ete1l89z5/img5.jpg" alt="" />
                    <span className="name">Michael Jordan</span>
                    <span className="time">2:09 PM</span>
                    <span className="preview">Wasup for the third time like is
you blind bitch</span>
                </li>

                <li className="person" data-chat="person6">
                    <img src="https://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                    <span className="name">Drake</span>
                    <span className="time">2:09 PM</span>
                    <span className="preview">howdoyoudoaspace</span>
                </li>
            </ul>
        </div>

    </Col>

    <Col sm='7'>
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
                    So, how's your new phone?
                </div>
                <div className="bubble you">
                    You finally have a smartphone :D
                </div>
                <div className="bubble me">
                    Drake?
                </div>
                <div className="bubble me">
                    Why aren't you answering?
                </div>
                <div className="bubble you">
                    howdoyoudoaspace
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
    </Row>
    </Container>
    </div>
    )
  }
}


