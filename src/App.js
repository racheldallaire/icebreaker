import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Head from './pages/Head'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import Signup from './pages/Signup'
import Matches from './pages/Matches'
import Potentials from './pages/Potentials'
import Chats from './pages/Chats'
import ChatBar from './pages/ChatBar'
import MessageList from './pages/MessageList'
import axios from 'axios';
import Filters from './pages/Filters'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isLoggedIn: false,
      isOpen: false,
      potentials:[]
    };
  }

  componentDidMount(){
    axios.get('/api/loggedIn')
    .then(response => {
      if(response.data = "true")
        this.setState({ isLoggedIn: true });
      else
        this.setState({ isLoggedIn: false });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn;

    return (
      <Router>
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand><Link to="/">Icebreaker</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!isLoggedIn &&
                <NavItem>
                  <NavLink><Link to="/">Home</Link></NavLink>
                </NavItem>
              }
              {isLoggedIn &&
                <NavItem>
                  <NavLink><Link to="/profile">Profile</Link></NavLink>
                </NavItem>
              }
              {isLoggedIn &&
                <NavItem>
                  <NavLink><Link to="/Matches">Matches</Link></NavLink>
                </NavItem>
              }
              {isLoggedIn &&
                <NavItem>
                  <NavLink><Link to="/Potentials">Potentials</Link></NavLink>
                </NavItem>
              }
              {isLoggedIn &&
                <NavItem>
                  <NavLink><Link to="/Chats">Chats</Link></NavLink>
                </NavItem>
              }
              {isLoggedIn &&
                <NavItem>
                  <NavLink><Link to="/logout">Logout</Link></NavLink>
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>

      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/filters" component={Filters}/>
      <Route path="/potentials" component={Potentials}/>
      <Route path="/chats" component={Chats}/>
      <Route path="/logout" component={Logout}/>

      </div>
      </Router>
    );
  }
}


