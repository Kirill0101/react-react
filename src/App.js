import React from 'react';
import Body from './Body.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './redux/auth-reducer.js'


class  App extends React.Component {

  componentDidMount(){

    this.props.onTryAutoSignup()

  }
    render() {

  return (
    <Router>
      <Body {...this.props}/>
    </Router>

  );
}
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
