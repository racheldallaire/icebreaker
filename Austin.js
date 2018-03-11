formData.append('file', file);
axios.post(`http://localhost:3000/v1/projects/${project.id}/contractFile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

 'postgres://root:final@localhost:5432/icebreaker'

class IndexUser extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', users: ''};
      this.addUserService = new UserService();
    }
    componentDidMount(){
      axios.get('http://localhost:4200/users')
      .then(response => {
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

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>