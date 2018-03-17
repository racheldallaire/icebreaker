import React, {Component} from 'react';
import { Form, Input } from 'reactstrap';
import axios from 'axios';

export default class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      input: '', 
      currentUser: props.currentUser
    };
  }

  render() {
    const changedText = (evt) => {
      this.setState({input: evt.target.value, currentUser: this.state.currentUser});
    };

    const changedUser = (evt) => {
      this.setState({inputValue: this.state.inputValue, currentUser: evt.target.value});
    };

    const sendMessage = (evt) => {
      if(evt.key === 'Enter') {
        this.props.brandNewMessage(this.state);
        this.setState({input: '', currentUser: this.props.currentUser});

        const that = this
        axios.post('/api/message_db', {
          input: that.state.input, 
          currentUser: that.props.currentUser,
          userlikesid: that.props.userlikesid
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