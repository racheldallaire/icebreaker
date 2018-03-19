import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row , Badge } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserTimes } from '@fortawesome/fontawesome-free-solid'
import { faHeart } from '@fortawesome/fontawesome-free-solid';


export default class ChatWindow extends Component {
    constructor(props) {
    super(props);
    this.state = {
        content: "",
        game_played: false,
        game: "",
        userlikesid: 0,
        userid: 0,
        timestamp: "",
        allMessages: [],
        oldMessagePost: ""
        };
     this.getNewGame = this.getNewGame.bind(this);

    }

    componentWillReceiveProps(props) {
      axios.get('/api/messages_db', {
        params: {
          userlikesid: props.userlikesid,
        }
      })
      .then(response => {
        console.log("past messages", response.data);
        this.setState({
            allMessages: response.data
        });
      })
      .catch(function (error) {
      console.log(error);
      });


    }

    componentDidMount(){

      axios.get('/api/new_game')
      .then(response => {
        console.log(response.data);
        this.setState({
            game: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    getNewGame(){
      axios.get('/api/new_game')
      .then(response => {
        this.setState({
            game: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('current-chat');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

   render () {
    var oldMessages = <span> Hi </span>

      if(this.props.oldMessage === true) {
        console.log("True")
      oldMessages = this.state.allMessages.map((message) => {
          console.log("MESSAGE",message )
      if (message.userid === this.props.currentUser) {
        console.log("111111")
          return <li key={message.id}><b>{message.content}</b></li>
             } else {
         return<li key={message.id}>{message.content}</li>
          console.log("22222")
            }
          });
          }


    var lookingForMen = <span>  </span>
    var lookingForWomen = <span>  </span>
    var lookingForOther = <span>  </span>
       if(this.props.hasData && this.props.user2Info[0].lovemale){
        lookingForMen =
            <span className="lookingfor">
              💙
             </span>}
      if(this.props.hasData && this.props.user2Info[0].lovefemale){
        lookingForWomen =
            <span className="lookingfor">
              ❤️
             </span>}
      if(this.props.hasData && this.props.user2Info[0].loveother){
        lookingForOther =
            <span className="lookingfor">
              💚
             </span>}

    var chattingWith = "You have no Matches to Chat with";
    if (this.props.hasData) {
    var user= this.props.user2Info[0]
    console.log("Chatting with ", this.props.user2Info[0])

        chattingWith =
            <div className="top">
            <span>
            <img src={user.facebook_picture_url}  className="chatimg" />
            <span className="name">{user.first_name}  {user.last_name}</span>
            {lookingForMen}  {lookingForWomen} {lookingForOther}
             <span className="removeUser">
            <Button alt="Remove Friend" onClick={this.props.removeFromFriends}  className="unfriend"><FontAwesomeIcon icon={faUserTimes} /></Button></span>
           </span>
            </div>

    }  else {

      chattingWith =
          <div className="top">
            <div style={{color: '#999', textAlign: 'center'}}>Select a friend to start chatting!
            <p><i>No friends yet? <a href="/Potentials">Go make some!</a></i></p>
            </div>

            </div>
     }


    const messages = this.props.messages.map((message) => {
            return <Message message={message} key={message.key} />
          });
    return (


    <Col sm={{ size: 7, offset: 5 }} style={{position: 'absolute', overflow: 'scroll', height: '80%'}} id="current-chat">
        <div className="right">

             {chattingWith}

            <div className="active-chat">


                <div className="conversation-start"><span/></div>

                    <p> {this.state.game} </p>
                    <button className="cool-button3" onClick={this.getNewGame}> Get Another Mini-Game! </button>
                      <div>
                      <ul>
                     {oldMessages}
                     </ul>
                     </div>
                      {messages}

            </div>

        </div>
    </Col>


    )
  }
}


