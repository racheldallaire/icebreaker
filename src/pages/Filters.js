import React from 'react'
import axios from 'axios';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: "hi"};
  }

  componentDidMount(){
    axios.get('/api/filters')
    .then(response => {
      console.log("response.data ", response.data);
      this.setState({ test: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div> 
        Awesome, nice to meet you!
        Now, would you let us know what you're looking for?
        <form method="post" action="/filters">
          <label>
            Minimum Age
            <input type="number" name="min_age" min="18" required />
          </label>
          <label>
            Maximum Age:
            <input type="number" name="max_age" required />
          </label>
          <label>
            Maximum Distance:
            <input type="number" name="distance" required />
          </label>
          <label>
            Gender:
                <input type="checkbox" name="gender" value="Male" /> Male<br/>
                <input type="checkbox" name="gender" value="Female" /> Female<br/>
                <input type="checkbox" name="gender" value="Other" /> Other<br/>
          </label>
          <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }
}

export default Filters