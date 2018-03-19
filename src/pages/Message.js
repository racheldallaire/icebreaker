import React, {Component} from 'react';

export default class Message extends Component {
	render() {


	  const {content, currentUser, type,  userlikesid}=this.props.message
	  // const fromMe = this.props.fromMe ? 'me' : 'you';


if(this.props.currentUser == currentUser){
	  return (
    <div>
      {type === 'postMessage' && <div className="message">
      <div className="bubble you">{content}</div>
      </div>}
    </div>
    );
    } else {
         return (
    <div>

    </div>
    );

      }
    }
	}
