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
          filteredFriend: [],
          search_name: ""

        }
        this.filterFriends = this.filterFriends.bind(this);
        this.changedText = this.changedText.bind(this);

      }


      componentDidMount(e){
         this.setState({matchdisplay: this.props.matches})
      }

           changedText(evt){
            console.log (evt.target.value)
            this.setState({search_name: evt.target.value})
            };

          filterFriends(evt) {
            if(evt.key === 'Enter') {
              console.log("evt",evt.target.value)
            var nameMatches = []
            var matchList = this.props.matches
            var search_name  = evt.target.value
              console.log("search_name",this.search_name)


            for (let user of matchList) {
             if ((user.first_name === search_name || user.last_name === search_name)) {
              console.log("namematch user", user)
              nameMatches.push(user)
            }
                this.setState({matchdisplay: nameMatches})
            }
            // this.setState({filteredFriend: matchList});
           }
            };
      render () {


      var matchedChat = this.props.matches.map((matches) => {
                return <li key={matches.id}  onClick= {this.props.chattingWithUser}  value={matches.id}   className="person">
                        <img src={matches.facebook_picture_url} alt="" />
                        <span className="name">{matches.first_name} {matches.last_name}</span>
                        <span className="preview">This is a message preview</span>
                        <span className="time">1:00pm</span>
                      </li>
        });



          return (
          <div>
            <input type="text" onChange={this.changedText} value={this.state.input} onKeyPress={this.filterFriends} />
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
          </div>

          )
      }
    }