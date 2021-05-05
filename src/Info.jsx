import React from 'react';
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { myUser, youOrden } from './redux/users-reducer.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { setValue,mySentence} from './redux/sentence-reducer.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import renderHTML from 'react-render-html';


class Info extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }


    state = {
        value : 'First'

    }

    componentDidMount(){
      let token = this.props.token
      this.props.myUser(token)
      this.props.youOrden()


    }

    HandleChange = ()=>{

      var exp = this.myRef.current.value

      this.props.setValue(exp)

    }


  render(){


   return (
     <div style={{margin:'20px'}}>
    <div style={{ height: 'auto', paddingTop:'10px'}}>

<Row>
  <Col>
  </Col>

  <Col xs='8'>
<div >
<h1 style={{marginBottom: '20px', marginTop:'50px', textAlign: 'center'}}>Уважаемый участник эксперимента!</h1>
<div >
  <p style={{textAlign:'center'}}>Эксперимент предназначен для участников, владеющих испанским языком или изучающих его.</p>
<p style={{textAlign:'justify', textIndent:'40px'}}>
Прохождение эксперимента занимает _ минут. Мы просим вас не отвлекаться во время эксперимента и проходить его только один раз.
</p>
<p style={{textAlign:'justify', textIndent:'40px'}}>
Рекомендуем проходить эксперимент с персональных компьютеров. При прохождении эксперимента с мобильных устройств могут возникнуть технические проблемы.
</p>
<p style={{textAlign:'justify', textIndent:'40px'}}>
Пожалуйста, не закрывайте страницу с экспериментом, пока не увидите надпись <i>"Спасибо, эксперимент завершен!"</i>, она означает, что ваши ответы сохранены в системе.
</p>

<p style={{textAlign:'justify', textIndent:'40px'}}>
В этом эксперименте вам будут последовательно предъявляться небольшие отрывки текстов на испанском языке с пропусками.
</p>
<p style={{textAlign:'justify', textIndent:'40px'}}>
1. <b>Заполните пропуски</b>, преобразовав указанный глагол в одну из форм прошедшего времени изъявительного наклонения: <i>Pretérito Imperfecto, Pretérito Indefinido, Pretérito Perfecto, Pretérito Pluscuamperfecto</i>. Для участия в эксперименте достаточно знакомства хотя бы с одной из перечисленных форм. Когда заполните все пропуски, нажмите кнопку <i>"Подтвердить"</i>.
</p>
<p style={{textAlign:'justify', textIndent:'40px'}}>
2. Система автоматически проверит ваши ответы и сформирует пояснения к каждому пропуску. Отметьте, <b>согласны</b> ли Вы с ответом, предложенным системой ("Да", "Нет", "Не уверен").Прочитайте пояснения и оцените каждое по шкале от 1 до 5, где:
</p>
<ul style={{textIndent: '0px'}}>
<li>1 - пояснение совершенно неправильное</li>
<li>5 - пояснение полное и правильное</li>
</ul>

<p style={{textAlign:'justify', textIndent:'40px'}}>

3. <b>Оцените</b> качество текста, выбранного в качестве материала для задания, по шкале от 1 до 3, где:
<ul style={{textIndent: '0px'}}>
<li>1 - текст трудно читается, содержит ошибки и опечатки, совершенно непригоден для такого задания</li>
<li>5 - текст понятный, без ошибок и опечаток, не содержит вопросов с неоднозначным ответом</li>
</ul>

</p>

</div>
<center style={{marginTop:'50px'}}>
  <p >Выберете эксперимент</p>
<Form.Group  controlId="formGridState" style={{width:'120px'}}>
  <Form.Label></Form.Label>
  <Form.Control ref={this.myRef} onChange={this.HandleChange} required as="select" defaultValue="Beg">
    <option value='First'>Первый</option>
    <option value='Second'>Второй</option>


  </Form.Control>
</Form.Group>
</center>
<center>
<Button variant="info" style={{marginTop:'20px'}} onClick={this.props.start}>
  Начать
</Button>
</center>
</div>
</Col>
<Col>
</Col>
</Row>


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


export default withRouter(connect(mapStateToProps, {myUser, setValue,mySentence, youOrden})(Info))
