
import React from 'react';

import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './redux/auth-reducer.js'
import {withAuthRedirect} from "./hoc.jsx";
import {compose} from "redux";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {

render() {

return(

<Navbar bg="dark" variant="dark">
    <Navbar.Brand >Experiment</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
    </Nav>

  </Navbar>
)
}
}

const mapDispatchToProps = dispatch => {
  return {
    logout : () => dispatch(logout())
  }
}



export default withRouter(compose(connect(null,mapDispatchToProps ),withAuthRedirect)(Header))
