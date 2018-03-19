import React, {Component} from 'react';
import { Form, Input } from 'reactstrap';
import axios from 'axios';

export default class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      input: '',
    };
  }

  render() {
    const changedText = (evt) => {
      this.setState({
        input: evt.target.value,
        currentUser: this.props.currentUser,
        userlikesid:  this.props.userlikesid,
        currentUserID:  this.props.currentUserID,
        user2:  this.props.user2
       });

    };

    const changedUser = (evt) => {
      this.setState({inputValue: this.state.inputValue, currentUser: evt.target.value});
    };

    const sendMessage = (evt) => {
      console.log()
      if(evt.key === 'Enter') {

        this.props.brandNewMessage(this.state);
        this.setState({input: ''});

        const that = this
        axios.post('/api/message_db', {
          input: that.state.input,
          currentUser: that.props.currentUser,
          userlikesid: that.props.userlikesid,
          currentUserID: that.props.currentUserID,
          user2: that.props.user2

        })




      }
    };

    return (
	    	<div className="right">
	        <div className="write">

                <input type="text" onChange={changedText} value={this.state.input} onKeyPress={sendMessage} />
                <a href="javascript:;" className="write-link send"></a>

            </div>
          </div>
	    );
	}
}