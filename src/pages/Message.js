import React, {Component} from 'react';

export default class Message extends Component {
	render() {
	  const {content, currentUser, type, color}=this.props.message
	  return (
    <div>
      {type === 'postMessage' && <div className="message">

      <div className="bubble me">{content}</div>
      </div>}


    </div>
    );
	}
}