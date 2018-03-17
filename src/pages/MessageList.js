import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/fontawesome-free-solid';

    export default class MessageList extends Component {
      constructor(props) {
        super(props);
        console.log("Message list props", props)
        this.state = {
        }
      }


      componentDidMount(e){

      }
      

      render () {

        const matchedChat = this.props.matches.map((matches) => {
                return <li key={matches.id}  onClick= {this.props.chattingWithUser}  value={matches.id}   className="person">
                        <img src={matches.facebook_picture_url} alt="" />
                        <span className="name">{matches.first_name} {matches.last_name}</span>

                      </li>
        });

          return (

            <Col sm="5">
              <div className="left">

                  <div className="top">
                  <FontAwesomeIcon icon={faCommentAlt} /> Messages
                  </div>

                  <ul className="people">

                      {matchedChat}

                  </ul>
              </div>
            </Col>
          )
      }
    }