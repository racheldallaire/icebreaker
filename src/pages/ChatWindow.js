import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUserTimes } from '@fortawesome/fontawesome-free-solid'


export default class ChatWindow extends Component {
    constructor(props) {
    super(props);
    this.state = {
        content: [],
        game_played: false,
        game: "",
        userlikesid: 0,
        userid: 0,
        timestamp: ""
        };
     this.getNewGame = this.getNewGame.bind(this);

    }

    componentDidMount(){
      axios.get('/api/new_game')
      .then(response => {
        console.log(response.data);
        this.setState({
            game: response.data
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

      // GET CONTENT (IN MESSAGES DB) ONLY FROM USERLIKESID 
      axios.get('/api/messages_db')
      .then(response => {
        console.log(response.data);
        this.setState({
            content: response.data[0].content,
            userlikesid: response.data[0].userlikesid,
            userid: response.data[0].userid
        });
      })
      .catch(function (error) {
      console.log(error);
      });
    }

    getNewGame(){
      axios.get('/api/new_game')
      .then(response => {
        console.log(response.data);
        this.setState({
            game: response.data
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

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('current-chat');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

   render () {

    var chattingWith = "You have no Matches to Chat with";
    if (this.props.hasData) {
    var user= this.props.user2Info[0]
    console.log("Chatting with ", this.props.user2Info[0])

        chattingWith =
            <div className="top">
            <span>
            <img src={user.facebook_picture_url}  className="chatimg" />
            <span className="name">{user.first_name}  {user.last_name}</span>
             <span className="removeUser">
            <Button alt="Remove Friend" onClick={this.props.removeFromFriends}  className="unfriend"><FontAwesomeIcon icon={faUserTimes} /></Button></span>
             <i className="like-user"><FontAwesomeIcon icon={faHeart} /></i>
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

                    {messages}

            </div>

        </div>
    </Col>


    )
  }
}


