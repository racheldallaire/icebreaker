import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      filteredFriend: [],
      search_name: "",
      originalMatches: [],
      input: "",
    }
    this.filterFriends = this.filterFriends.bind(this);
    this.changedText = this.changedText.bind(this);
  }


  componentDidMount(e) {
     this.setState({originalMatches: this.props.matches})
  }

  changedText(evt) {
     if(evt.key === 'Enter') {
       this.setState({
      input: "" })
      } else {
    this.setState({
      search_name: evt.target.value,
      input: evt.target.value })
   }
  };

  filterFriends(evt) {
    var nameMatches = []
    var matchList = this.props.matches

    if(evt.key === 'Enter') {
      var search_name  = evt.target.value;
      this.setState({
      input: "" })

      for (let matches of matchList) {
        if ((matches.first_name.toLowerCase() === search_name.toLowerCase() || matches.last_name.toLowerCase() === search_name.toLowerCase() || (matches.first_name.toLowerCase() + " " + matches.last_name.toLowerCase()) === search_name.toLowerCase() ) ) {
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
        var user2id = matches.id
        console.log("MessageList", user2id)
                return <li key={matches.id}  onClick={this.props.chattingWithUser}  value={user2id} name={user2id}  className="person">
                        <img src={matches.facebook_picture_url} alt="" />
                        <span className="name">{matches.first_name} {matches.last_name}</span>
                      </li>
        });
      var searchChat = this.state.filteredFriend.map((matches) => {
                return <li id="search" key={matches.id}  onClick= {this.props.chattingWithUser}  value={matches.id}   className="person">
                        <img src={matches.facebook_picture_url} alt="" />
                        <span className="name">{matches.first_name} {matches.last_name}</span>
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

                <li>
                  <Button className="cool-button5" id="back" onClick={this.originalMatches} type="button"> Back to Chats </Button>
                </li>

              </ul>

          </div>
        </Col>
      </div>

  )}
}