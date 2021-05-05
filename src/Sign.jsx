import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import validator from 'validator'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import { postD1} from './redux/sentence-reducer.js'
import { myOrden, youOrden} from './redux/users-reducer.js'

import { Redirect } from 'react-router-dom'

class Sign extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
      this.myRef3 = React.createRef();
      this.myRef4 = React.createRef();

    }

    state = {

      redirect : false,
      validation :false,
      val : false

    }

    componentDidMount(){
      this.props.youOrden()
    }

    handleChange = () =>{

      var flag = 'up'
      var new_list = [this.myRef.current.value, this.myRef2.current.value,this.myRef3.current.value,this.myRef4.current.value]
      new_list.forEach((item)=>{
        if (item==''){
          flag = 'down'
        }
      })


      if (flag=='up' && validator.isEmail(this.myRef.current.value)){
        this.setState({
          validation : true
        })
      }
    }

    handleClick = (event) => {




      if (this.state.validation) {



        var sign_dic = {}
        sign_dic['email'] =   this.myRef.current.value
        sign_dic['password'] =  this.myRef2.current.value
        sign_dic['name']   =  this.myRef3.current.value
        sign_dic['username']  =  this.myRef4.current.value
        this.props.postD1(sign_dic)

        var data = this.props.users_n
        var new_n = parseInt(data[data.length-1]['user_number']) + parseInt(1)
        var new_dic = {}
        new_dic['user_mail'] = this.myRef.current.value
        new_dic['user_number'] = new_n
        new_dic['user_try'] = '0;0'

        this.props.myOrden(new_dic)


        this.setState({
          redirect : true
        })
    }

    else {
      this.setState({
        val : true
      })

    }

    }

    renderRedirect = () => {

      if  (this.state.redirect) {
        return <Redirect to={'/questionary'}/>
      }
    }

  render(){

    if(this.state.val){
      var alert =  <Alert  variant='danger' style={{width:'300px',marginTop:'50px'}}>Возможно, Вы оставили пустым поле, ввели уже существующее в системе имя пользователя, неверно указали доменное имя почты</Alert>
    }

    return(
      <>
        {this.renderRedirect()}
      <Container style= {{border:'solid #17a2b8',borderRadius: '5px', marginTop: '50px', padding: '20px', width: '600px'}}>
      <Form onChange={this.handleChange}>

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




  <Button variant="info"  onClick={this.handleClick}>
    Submit
  </Button>
</Form>
</Container>
<center>
{alert}
</center>
</>

    )
  }
}

const mapStateToProps = (state) => {

    return {

      token :   state.auth.token,
      users_n : state.users.users_number


  }
}





export default withRouter(connect(mapStateToProps, {postD1, myOrden, youOrden})(Sign))
