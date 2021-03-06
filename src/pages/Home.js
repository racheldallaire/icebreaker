import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
  return (
      <div className="bg" style={{textAlign:"center"}}>

          <h1 className="bg-head"><b>Welcome to Icebreaker.</b></h1>

          <p>
            <Button className="home-button" href="/auth/facebook">Continue with Facebook</Button>
          </p>
      </div>
    );
};

export default Home;
