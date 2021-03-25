import React from 'react';
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { myUser } from './redux/users-reducer.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { setValue} from './redux/sentence-reducer.js'



class Info extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }


    state = {
        value : 'First'

    }

    componentDidMount(){
      console.log(this.props.start)
      let token = this.props.token
      this.props.myUser(token)

    }

    HandleChange = ()=>{

      var exp = this.myRef.current.value

      this.props.setValue(exp)
      
    }


  render(){


    console.log(this.state.value)

   return (
     <div style={{margin:'100px'}}>
      <div style={{border:'solid',borderRadius:'9px' ,height: '400px', paddingTop:'100px'}}>
      <center>
        Это информация про эксперимент
      </center>
      <center>
        <Form.Group  controlId="formGridState" style={{width:'100px', marginTop:'50px'}}>
          <Form.Label>Experiment N</Form.Label>
          <Form.Control ref={this.myRef} onChange={this.HandleChange} required as="select" defaultValue="Beg">
            <option value='First'>First </option>
            <option value='Second'>Second</option>


          </Form.Control>
        </Form.Group>
      </center>

      <center>
      <Button variant="primary" style={{marginTop:'50px'}} onClick={this.props.start}>
        Начать
      </Button>
      </center>

      </div>
     </div>
   )
 }
}

const mapStateToProps = (state) => {

    return {
      sentence: state.sentence.sentence,
      token :   state.auth.token,
      users : state.users.users,
      value: state.sentence.value

  }
}


export default withRouter(connect(mapStateToProps, {myUser, setValue})(Info))
