import React, {Component} from 'react';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class MessageList extends Component {

   render () {
    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (

    <Col sm="5">
        <div className="left">

            <div className="top">
                <input type="text" />
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
                    <span className="preview">She broke my heart tho bro like I just can't believe this keeps happening to me</span>
                </li>
            </ul>
        </div>

    </Col>

    )
  }
}


