import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {authLogin} from './redux/auth-reducer.js'
import {authEmail} from './redux/auth-reducer.js'
import { myUser } from './redux/users-reducer.js'
import { Redirect } from 'react-router-dom'


import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class Login extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
    }

    state = {

      token :  '',
      validation : true,
      redirect: false,
    }

      handleRedirect = () =>{
        let token = this.props.token


      }



          setRedirect = (event) => {
            this.setState(
              {
              redirect: true,
                }
              )
          }


          renderRedirect = () => {

            if  (this.state.redirect) {
              return <Redirect to={'/sign'}/>
            }
          }


      handleSubmit = (event) => {

         const email =   this.myRef.current.value
         const password =  this.myRef2.current.value
         this.props.onAuth(email,password)
         this.props.getEmail(email)


         //if (this.props.token){  this.props.history.push('/experiment')}
       }

       componentDidUpdate(){
         if (this.props.token){
           this.props.history.push('/experiment')
         }



       }



  render(){


    let errorMessage = null;
      if (this.props.error){
        errorMessage = ( <p>{this.props.error.message}</p> )
        }


  return (

<>
      {this.renderRedirect()}
    <Container style= {{border:'solid #007bff',borderRadius: '5px', marginTop: '50px', padding: '20px'}}>
  <Row>
    <Col>

      {errorMessage}

    <Form >
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control   ref={this.myRef}  label="Email"  name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  isInvalid={this.con} ref={this.myRef2}  label="Password" name="password" type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" onClick={(event)=>{this.handleSubmit(event)}}>
    Login
    </Button>

    <Button variant="primary" style= {{marginLeft : '10px'}}onClick={this.setRedirect}>
    Sign up
    </Button>

    </Form>


    </Col>
  </Row>
</Container>
</>
  );
}
}


const mapStateToProps = (state) => {

    return {
    loading: state.loading,
    error: state.error,
    users: state.users.users,
    email : state.auth.email,
    token : state.auth.token,
    email : state.auth.email


  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAuth : (email, password) => dispatch(authLogin(email,password)),
    getEmail : (email) => dispatch(authEmail(email)),

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
