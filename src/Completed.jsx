import React from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Redirect } from 'react-router-dom'


class Completed extends React.Component {

  state = {
    redirect : false,
  }


  handleClick = () => {

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

      <Row>
        <Col>
        </Col>
        <Col xs={10} style={{marginTop:'100px'}}>
          <center>
      <h1>Спасибо, Вы зарегистрированы</h1>
      <Button style={{marginTop:'50px'}} onClick={this.handleClick}>Back</Button>
      </center>

      </Col>
      <Col>
      </Col>
    </Row>
    </>
    )
  }

}



export default Completed
