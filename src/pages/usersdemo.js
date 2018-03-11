import React from 'react'

class UserDemo extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', users: ''};

    }
    componentDidMount(){
      axios.get('postgresl://root:final@localhost:5432/icebreaker')
      .then(response => {
        console.log("response ", response)
           console.log("response.data ", response.data )
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    userRow(){
      if(this.state.users instanceof Object){
        return this.state.users.data.map(function(object, i){

            return <UserRow obj={object} key={i} />;
        })
      }
    }

      return (
        <div className="container">

                {this.users)}

        </div>
      );
    }


export default UserDemo;