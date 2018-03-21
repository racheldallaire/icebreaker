import React, {Component} from 'react';
import ChatWindow from './ChatWindow.js';

export default class Message extends Component {
	render() {


	  const {content, currentUser, type,  userlikesid}=this.props.message
	  // const fromMe = this.props.fromMe ? 'me' : 'you';


if(this.props.currentUser == currentUser) {
	  return (
    <div>
    </div>
    );
    } else {
      console.log("this.props.currentuserID",this.props.currentUser, "currentUser", currentUser  )
         return (
     <div>

    </div>
      );

      }
    }
	}
