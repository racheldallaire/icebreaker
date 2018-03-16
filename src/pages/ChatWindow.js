import React, {Component} from 'react';
import axios from 'axios';
// import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';


export default class ChatWindow extends Component {
    constructor(props) {
    super(props);
    this.state = {
        content: ""


        }
     this.removeFromFriendArray = this.removeFromFriendArray.bind(this);
     // this.chattingWithUser = this.chattingWithUser.bind(this);
    }

  componentDidMount(e, props){
      // axios.get('/api/chat_window')

      // .then(response => {
      //   this.setState({
      //       hasData: true,

      //   });
      //   console.log("response.data", response.data)

      // })
       console.log("HHHHHEEEEERRRRREEEEE",this.props.user2 )
    }

  removeFromFriendArray(e){
    console.log("remove from Potentials clicked")
    var data = []
      data = this.props.user2
        this.setState({

            user2: data.splice(1)
        });
    axios.post('/api/friendremoved', {
        user2: this.state.user2[0].id,
      })
      .then(function (response) {
        console.log(response);
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
    console.log("hasData HERE", this.props.hasData)
     console.log("this.props.user2", this.props.user2Info)
    if (this.props.hasData) {
    var user= this.props.user2Info[0]
    console.log("this.state.user2[0]", this.props.user2Info[0])

        chattingWith =
            <div className="top">
            <span>
            <img src={user.facebook_picture_url}  className="chatimg" />
            <span className="name">{user.first_name}  {user.last_name}</span>
            </span>
            </div>

    }  else {
      chattingWith =
          <div className="top">
            <span>
            <img src="https://s16.postimg.org/ete1l89z5/img5.jpg" className="chatimg" />
            <span className="name">Michael Jordan</span>
            </span>
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

                <div className="conversation-start">
                    <p/><span>Today, 6:28 AM</span>
                </div>

                    {messages}

            </div>

        </div>
    </Col>


    )
  }
}


