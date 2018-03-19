import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

    export default class MessageList extends Component {
      constructor(props) {
        super(props);
        console.log("Message list props", props)
        this.state = {
          matches: [],
          filteredFriend: [],
          search_name: "",
          originalMatches: [],
        }
        this.filterFriends = this.filterFriends.bind(this);
        this.changedText = this.changedText.bind(this);

      }


      componentDidMount(e){
         this.setState({originalMatches: this.props.matches})
      }

     changedText(evt){
      console.log (evt.target.value)
      this.setState({search_name: evt.target.value})
      };

      filterFriends(evt) {
        var nameMatches = []
        var matchList = this.props.matches

        if(evt.key === 'Enter') {
          var search_name  = evt.target.value
          for (let matches of matchList){
            if ((matches.first_name === search_name || matches.last_name === search_name || (matches.first_name + " " + matches.last_name) === search_name ) ) {
              nameMatches.push(matches)
              }
              this.setState({filteredFriend: nameMatches})
              var peeps = document.getElementsByClassName("person")
                for (let i=0; i < peeps.length; i++) {
                  peeps[i].style.display = "none";
                }
              document.getElementById("back").style.display = "block";
            }

        }
      };
      originalMatches(evt) {

        var peeps = document.getElementsByClassName("person")
                for (let i=0; i < peeps.length; i++) {
                  peeps[i].style.display = "block";
                }
      document.getElementById("back").style.display = "none";
      document.getElementById("search").style.display = "none";

      }


      render () {

      var matchedChat = this.props.matches.map((matches) => {
                return <li key={matches.id}  onClick= {this.props.chattingWithUser}  value={matches.id}   className="person">
                        <img src={matches.facebook_picture_url} alt="" />
                        <span className="name">{matches.first_name} {matches.last_name}</span>
                        <span className="preview">This is a message preview</span>
                        <span className="time">1:00pm</span>
                      </li>
        });
      var searchChat = this.state.filteredFriend.map((matches) => {
                return <li id="search" key={matches.id}  onClick= {this.props.chattingWithUser}  value={matches.id}   className="person">
                        <img src={matches.facebook_picture_url} alt="" />
                        <span className="name">{matches.first_name} {matches.last_name}</span>
                        <span className="preview">This is a message preview</span>
                        <span className="time">1:00pm</span>
                      </li>
                 })


          return (
          <div>
            <Col sm="5">
              <div className="left">

                  <div className="top">

                  <input type="text" placeholder="Enter name to search chats" onChange={this.changedText} value={this.state.input} onKeyPress={this.filterFriends} />

                  </div>

                  <ul className="people">

                      {matchedChat}

                  </ul>
                  <ul className="people">
                  {searchChat}
                  <li><Button className="cool-button5" id="back" onClick={this.originalMatches} type="button" >Back to Chats</Button></li>
                   </ul>
              </div>
            </Col>
          </div>

          )
      }
    }