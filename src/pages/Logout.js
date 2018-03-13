import React from 'react';
import axios from 'axios';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    axios.get('/api/logout')
    .then(response => {
      console.log("response.data ", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let styles = {
      textAlign: 'center'
    }
    return (
      <div style={styles}>
        Logged Out Succesfully!
        <a href="/"> Click here to get back to home page! </a>
      </div>
    );
  }
}

export default Logout