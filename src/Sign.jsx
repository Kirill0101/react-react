import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {postUserData} from './api/api.js'
import { Redirect } from 'react-router-dom'

class Sign extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
      this.myRef3 = React.createRef();
      this.myRef4 = React.createRef();
      this.myRef5 = React.createRef();

    }

    state = {

      redirect : false
    }

    handleClick = (event) => {
      var sign_dic = {}
      sign_dic['email'] =   this.myRef.current.value
      sign_dic['password'] =  this.myRef2.current.value
      sign_dic['name']   =  this.myRef3.current.value
      sign_dic['username']  =  this.myRef4.current.value
      sign_dic['experience']  =  this.myRef5.current.value

      console.log(postUserData.postUserD(sign_dic))

      this.setState({
        redirect : true

      })
    }

    renderRedirect = () => {

      if  (this.state.redirect) {
        return <Redirect to={'/'}/>
      }
    }

  render(){

    return(
      <>
        {this.renderRedirect()}
      <Container style= {{border:'solid #007bff',borderRadius: '5px', marginTop: '50px', padding: '20px', width: '400px'}}>
      <Form>

    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control ref={this.myRef}  required type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group  controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control ref={this.myRef2}  required type="password" placeholder="Password" />
    </Form.Group>


  <Form.Group controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control ref={this.myRef3}  required placeholder="Name" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Username</Form.Label>
    <Form.Control ref={this.myRef4}  required placeholder="Username" />
  </Form.Group>




    <Form.Group  controlId="formGridState">
      <Form.Label>Language experience</Form.Label>
      <Form.Control ref={this.myRef5} required as="select" defaultValue="Beg">
        <option value='Beg'>Beginner </option>
        <option value='Int'>Intermediate</option>
        <option value='Adv'>Advanced</option>


      </Form.Control>
    </Form.Group>




  <Button variant="primary"  onClick={this.handleClick}>
    Submit
  </Button>
</Form>
</Container>
</>

    )
  }
}

export default withRouter(connect(null, {postUserData})(Sign))
