import React, {Component} from 'react';

export default class Message extends Component {
	render() {
	  const {content, currentUser, type}=this.props.message
	  const fromMe = this.props.fromMe ? 'me' : 'you';

	  return (
    <div>
      {type === 'postMessage' && <div className="message">

      <div className={`bubble ${fromMe}`}>{content}</div>
      </div>}


    </div>
    );
	}
}