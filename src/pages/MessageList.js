import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    }

  }

  componentDidMount(e){
    axios.get('/api/message_list')
      .then(response => {
        this.setState({
            matches: response.data
        });

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    const matchedChat = this.state.matches.map((matches) => {
            return <li className="person">
                    <img src={matches.facebook_picture_url} alt="" />
                    <span className="name">{matches.first_name} {matches.last_name}</span>

                  </li>
    });

      return (

        <Col sm="5">
          <div className="left">

              <div className="top">
                  <input type="text" />
              </div>

              <ul className="people">

                  {matchedChat}


              </ul>
          </div>
        </Col>
      )
  };
}