import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        liked: false
        };
    }

  componentDidMount(e){
      axios.get('/api/message_list')
      .then(response => {
            console.log(response.data)
        this.setState({
            // first_name: response.data[0].first_name,
            // last_name: response.data[0].last_name,
            // age: response.data[0].age,
            // gender: response.data[0].gender,
            // description: response.data[0].description,
            // fb_pic: response.data[0].facebook_picture_url
        });
      })
      .catch(function (error) {
      console.log(error);
      });
    }

   render () {
    const messages = this.props.messages.map((message) => {
            return <Message message={message} type={message.fromMe} key={message.key} />
          });

          <div className="right">
          <div className="write">
                <input type="text" onChange={changedText} value={this.state.input} onKeyPress={sendMessage} required/>
                <a href="javascript:;" className="write-link send"></a>
            </div>
          </div>

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


