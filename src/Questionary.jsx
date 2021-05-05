import React from 'react';

import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { postD2} from './redux/sentence-reducer.js'


class Questionary extends React.Component {


  constructor(props) {
      super(props);
      this.myRef0 = React.createRef();
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
      this.myRef3 = React.createRef();
      this.myRef4 = React.createRef();
      this.myRef5 = React.createRef();
      this.myRef6 = React.createRef();
      this.myRef7 = React.createRef();
      this.myRef8 = React.createRef();
      this.myRef9 = React.createRef();
      this.myRef10 = React.createRef();
      this.myRef11 = React.createRef();
      this.myRef12 = React.createRef();


    }

    state = {

      redirect : false,
      validation :false,
      val : false
    }


    handleChange = () =>{

      var flag = 'up'
      var new_list = [this.myRef0.current.value,this.myRef.current.value,this.myRef3.current.value,this.myRef4.current.value, this.myRef8.current.value, this.myRef11.current.value, this.myRef12.current.value ]
      new_list.forEach((item)=>{
        if (item==''){
          flag = 'down'
        }
      })


      if (flag=='up'){
        this.setState({
          validation : true
        })
      }
    }


  handleClick = (event) => {
    if (this.state.validation){
    var sign_dic = {}
    sign_dic['email'] =   this.myRef0.current.value
    sign_dic['age'] =   this.myRef.current.value
    sign_dic['sex'] =  this.myRef2.current.value
    sign_dic['language_num']   =  this.myRef3.current.value
    sign_dic['language_child']   =  this.myRef4.current.value
    sign_dic['school']  =  this.myRef5.current.value
    sign_dic['grammar']  =  this.myRef6.current.value
    sign_dic['lexic'] =   this.myRef7.current.value
    sign_dic['language_other'] =  this.myRef8.current.value
    sign_dic['education']   =  this.myRef9.current.value
    sign_dic['language_education']  =  this.myRef10.current.value
    sign_dic['contact']  =  this.myRef11.current.value
    sign_dic['group']  =  this.myRef12.current.value

    this.props.postD2(sign_dic)

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
      return <Redirect to={'/completed'}/>
    }
  }


  render(){

    var alert = <div style={{height:'100px'}}></div>
    if(this.state.val){
       alert =  <Alert  variant='danger' style={{width:'400px',marginTop:'50px'}}>Возможно, Вы оставили пустым поле</Alert>
    }

    return(

      <>



            {this.renderRedirect()}




        <div style={{marginLeft:'300px',marginRight:'300px',marginTop: '50px', textAlign: 'justify' }}>
      <p style={{textAlign: 'center'}}>Пожалуйста, заполните небольшую анкету.</p>
      <p>Эта информация будет использована исключительно для анализа результатов эксперимента, не будет опубликована или передана третьим лицам.</p>


</div>

      <Container style= {{border:'solid #17a2b8',borderRadius: '5px', marginTop: '50px', marginBottom:'50px',padding: '20px', width: '600px'}}>
      <Form onChange={this.handleChange}>


        <Form.Group  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control ref={this.myRef0}  required type="email" placeholder="Введите тот же адрес, что и на предыдущей странице" />
        </Form.Group>

    <Form.Group  controlId="formGridEmail">
      <Form.Label>Возраст </Form.Label>


      <Form.Control ref={this.myRef}  placeholder="Введите возраст (число)" />
    </Form.Group>

    <Form.Group  controlId="formGridEmail">
      <Form.Label>Пол</Form.Label>
        <Form.Control ref={this.myRef2} required as="select" defaultValue="Женский">
          <option value='Женский'>Женский</option>
          <option value='Мужской'>Мужской</option>
        </Form.Control>
    </Form.Group>


  <Form.Group controlId="formGridAddress1">
    <Form.Label>Сколько лет вы изучаете испанский язык? </Form.Label>
    <Form.Control ref={this.myRef3}  required placeholder="Введите количество лет (число)" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>В каком возрасте вы начали изучение испанского языка?</Form.Label>
    <Form.Control ref={this.myRef4}  required placeholder="Введите возраст (число)" />
  </Form.Group>




    <Form.Group  controlId="formGridState">
      <Form.Label>Основной способ изучения: </Form.Label>
      <Form.Control ref={this.myRef5} required as="select" defaultValue="В школе/университете">
        <option value='В школе/университете'>В школе/университете</option>
        <option value='В испаноговорящей стране'>В испаноговорящей стране</option>
        <option value='Самостоятельно'>Самостоятельно</option>
      </Form.Control>
    </Form.Group>


          <Form.Group  controlId="formGridState">
            <Form.Label>Как вы оцениваете свой уровень владения испанским языком? (грамматика): </Form.Label>
            <Form.Control ref={this.myRef6} required as="select" defaultValue="A1-A2">
              <option value='A1-A2'>A1-A2</option>
              <option value='B1-B2'>B1-B2</option>
              <option value='C1-C2'>C1-C2</option>
            </Form.Control>
          </Form.Group>

          <Form.Group  controlId="formGridState">
            <Form.Label>Как вы оцениваете свой уровень владения испанским языком? (лексика): </Form.Label>
            <Form.Control ref={this.myRef7} required as="select" defaultValue="A1-A2">
              <option value='A1-A2'>A1-A2</option>
              <option value='B1-B2'>B1-B2</option>
              <option value='C1-C2'>C1-C2</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Если вы владеете другими языками, укажите эти языки</Form.Label>
            <Form.Control ref={this.myRef8}  required placeholder="Укажите языки" />
          </Form.Group>

          <Form.Group  controlId="formGridState">
            <Form.Label>Образование </Form.Label>
            <Form.Control ref={this.myRef9} required as="select" defaultValue="Неоконченное высшее">
              <option value='Среднее'>Среднее</option>
              <option value='Среднее специальное'>Среднее специальное</option>
              <option value='Неоконченное высшее'>Неоконченное высшее</option>
                <option value='Высшее'>Высшее</option>

            </Form.Control>
          </Form.Group>

          <Form.Group  controlId="formGridState">
            <Form.Label>Есть ли у вас лингвистическое образование (или получаете его сейчас)? </Form.Label>
            <Form.Control ref={this.myRef10} required as="select" defaultValue="Нет">
              <option value='Нет'>Нет</option>
              <option value='Да'>Да</option>
            </Form.Control>
          </Form.Group>


          <Form.Group controlId="formGridAddress2">
            <Form.Label style={{textAlign:'justify'}}>Пожалуйста, укажите любой удобный способ связаться с вами. Он может быть использован нами для того, чтобы предложить вам участие в других экспериментах в рамках этого исследования.</Form.Label>
            <Form.Control ref={this.myRef11}  required placeholder="Способ связи" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label style={{textAlign:'justify'}}>Пожалуйста, укажите Вашу группу</Form.Label>
            <Form.Control ref={this.myRef12}  required placeholder="Группа "/>
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label style={{textAlign:'justify'}}>Даю согласие на обработку ПД (<a href='https://drive.google.com/file/d/1ZwabJ67O2Tcx8MwYqbtnEwwSkm2Mx4-5/view' target='_blank'>ссылка на файл</a>)</Form.Label>
              <Form.Check  type="checkbox" label="Согласен" checked />

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

      users : state.users.users,

  }
}







export default withRouter(connect(mapStateToProps,{postD2})(Questionary))
