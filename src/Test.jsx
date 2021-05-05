import React from 'react';

import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {logout} from  './redux/auth-reducer.js'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { postD, mySentence } from './redux/sentence-reducer.js'
import { myUser,  youOrden} from './redux/users-reducer.js'
 import Button from 'react-bootstrap/Button'
 import Form from 'react-bootstrap/Form'

 import Alert from 'react-bootstrap/Alert'
 import ButtonGroup from 'react-bootstrap/ButtonGroup'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
 import renderHTML from 'react-render-html';



class Test extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
      this.myRef3 = React.createRef();

    }

  state = {
    stage : 'start',
    correct : false,
    validation : '',
    number : 0,
    values : [],
    eval : ['null', 'null', 'null', 'null', 'null'],
    eval_color : ['white', 'white', 'white', 'white', 'white'],
    paragraph: ['null', 'null', 'null', 'null', 'null'],
    paragraph_color: ['white', 'white', 'white', 'white', 'white'],
    counter: 1,
    color: [],
    user_name: '',
    right: ['null', 'null', 'null'],
    right_color: ['white', 'white', 'white'],
    final_eval: [],
    final_right:[] ,
    final_paragraph: [],
    try: '',
    area_value: ''

  }



  HandelChangeArea = (e) => {

    this.setState({
      area_value:e.target.value

    })

  }


HandleBtn = () =>{

   this.props.logout()

}

  componentDidMount(){




/* get username and add to State*/
    this.props.users.filter(user => user.email==this.props.email).map(user => {
      this.setState({
        user_name : user.username,

      })
    })

/* get the list of the lemmas, prepare it adding values, evaluation and color by defautl, adding to State */

    var lemma_list = this.props.data[this.state.number].lemma.split(';')
    for (var i=0;i< lemma_list.length; i++){
      this.state.values[i] = 'default'
      this.state.color[i] = ''
      this.state.final_eval[i] = 'default'
      this.state.final_right[i] = 'default'
      this.state.final_paragraph[i] = 'default'

      this.setState(
          {
        values: this.state.values,
        eval : this.state.eval,
        color:  this.state.color,
        final_eval: this.state.final_eval,
        final_right: this.state.final_right,
        final_paragraph: this.state.final_paragraph,

      })
    }
  }

/*End of componentDidMount*/



/*
    HandleState = (index) =>{
    this.state.values[index] = ''
    this.setState(
        {
      values: this.state.values,
    })
  }

*/



/*input values, adding to State */
  handleInputChange = (e,index) => {
    this.state.values[index] = e.target.value
      this.setState(
        {
          values: this.state.values,
        })
      }



/*select values, adding to State */

  HandleSelect = (e, item, index) =>{
    this.state.eval[index] = item
    this.state.eval_color[index]= 'rgb(212 237 218)'

    var index1 = this.state.eval.indexOf(item)
    var i = 0
    for (i; i< this.state.eval.length; i++){

      if (i !=index1 ){

        this.state.eval[i]= 'null'
        this.state.eval_color[i]= 'white'
      }
    }
    this.setState(
        {
          eval: this.state.eval,
          eval_color:  this.state.eval_color
        })


      }

      HandleRight = (e, item, index) =>{
        this.state.right[index] = item
        this.state.right_color[index]= 'rgb(212 237 218)'

        var index1 = this.state.right.indexOf(item)
        var i = 0
        for (i; i< this.state.right.length; i++){

          if (i !=index1 ){
            this.state.right[i]= 'null'
            this.state.right_color[i]= 'white'

          }
        }

        this.setState(
            {
              right: this.state.right,
              right_color:  this.state.right_color
            })


          }

/*final select values, adding to State */


  HandlePar = (e, item, index) => {
    this.state.paragraph[index] = item
      this.state.paragraph_color[index]= 'rgb(212 237 218)'
    var index1 = this.state.paragraph.indexOf(item)
    var i = 0
    for (i; i< this.state.paragraph.length; i++){

      if (i !=index1 ){
          this.state.paragraph_color[i] = 'white'
        this.state.paragraph[i]= 'null'
      }
    }
    this.setState(
        {
          paragraph: this.state.paragraph,
          paragraph_color: this.state.paragraph_color,


        })


      }


/*Button handler, depending of the stage*/

  HandleChange = (event) => {


  var len = this.props.data[this.state.number].feedback.split(';').length

/*if statement, stages of the evaluation */
    if (this.state.stage == 'start') {

      /*determing first cell color*/

          var first_answer = this.props.data[this.state.number].answer.split(';')[0]
          if (first_answer == this.state.values[0]){
          this.state.color[0] = '#d3edea'
         }
          else{
            this.state.color[0] = '#f8d7da'

          }
          this.setState(
              {
                stage: 'evaluation',
                color:   this.state.color
              })
            }





    else if (this.state.stage == 'evaluation'  && this.state.counter < len){


        for (var i =0; i< this.state.color.length;i ++ ){
            if (i == this.state.counter){
              var next_answer = this.props.data[this.state.number].answer.split(';')[i]
              if (next_answer == this.state.values[i]){
                this.state.color[i] = '#d3edea'
                }
              else {
                this.state.color[i] = '#f8d7da'
                }
              }
            else {
              this.state.color[i] = ''
            }
          }


          var new_answer_rate = this.state.right.filter((item) => item != 'null').join()
          var new_feedback_rate= this.state.eval.filter((item) => item != 'null').join()
          if (!new_answer_rate){
            new_answer_rate= 'null'
          }
          if (!new_feedback_rate){
            new_feedback_rate= 'null'
          }

          this.state.final_right[this.state.counter-1] = new_answer_rate
          this.state.final_eval[this.state.counter-1] = new_feedback_rate

        this.setState(
            {
              counter : this.state.counter + 1,
              color:   this.state.color,
              eval_color: ['white', 'white', 'white', 'white', 'white'],
              right_color:  ['white', 'white', 'white',],
              eval: ['null', 'null', 'null', 'null', 'null'],
              right: ['null', 'null', 'null'],
              final_right: this.state.final_right,
              final_eval: this.state.final_eval,

            })
          }


      else if (this.state.stage == 'evaluation' && (this.state.counter == len)) {

        for (var i =0; i< this.state.color.length;i ++ ){
            this.state.color[i] = ''
            }

            var new_answer_rate = this.state.right.filter((item) => item != 'null').join()
            var new_feedback_rate= this.state.eval.filter((item) => item != 'null').join()
            if (!new_answer_rate){
              new_answer_rate= 'null'
            }
            if (!new_feedback_rate){
              new_feedback_rate= 'null'
            }

            this.state.final_right[this.state.counter-1] = new_answer_rate
            this.state.final_eval[this.state.counter-1] = new_feedback_rate

        this.setState(
          {
            stage: 'validation',
            color:   this.state.color,
            final_right: this.state.final_right,
            final_eval: this.state.final_eval,
          })
        }



    else if (this.state.stage == 'validation'){

      var new_dic = {}
      var date = new Date()

      new_dic["user_name"] = this.state.user_name

      new_dic["date_time"] = JSON.stringify(date)
      new_dic['n_try'] = this.props.try
      new_dic['exp_set'] =this.props.set
      new_dic["n_id"] = this.props.data[this.state.number].id.toString()


      new_dic["answer"] = this.state.values.join(';')
      new_dic["correct_answer"] = this.props.data[this.state.number].answer


      var new_paragraph_rate = this.state.paragraph.filter((item) => item != 'null').join()

      if (!new_paragraph_rate){
        new_paragraph_rate= 'null'
      }
      new_dic["answer_rate"] =  this.state.final_right.join(';')
      new_dic["feedback_rate"] = this.state.final_eval.join(';')
      new_dic['paragraph_rate'] = new_paragraph_rate + ';' + this.state.area_value


      this.props.postD(new_dic, this.props.token, this.props.value)
      document.querySelectorAll('input').forEach((inp)=> {
        inp.value=''
      })
      this.setState(
          {
        stage: 'start',
        number: this.state.number + 1,
        correct : false,
        validation : '',
        values : [],
        eval : ['null', 'null', 'null', 'null', 'null'],
        paragraph: ['null', 'null', 'null', 'null', 'null'],
        counter: 1,
        color: [],
        right: ['null', 'null', 'null'],
        eval_color : ['white', 'white', 'white', 'white', 'white'],
        paragraph_color: ['white', 'white', 'white', 'white', 'white'],
        right_color: ['white', 'white', 'white'],
        final_eval: [],
        final_right: [],
        area_value: ''
      })




      if(this.state.number  < this.props.data.length-1){

      var lemma_list = this.props.data[this.state.number+1].lemma.split(';')
      for (var i=0;i< lemma_list.length; i++){
        this.state.values[i] = 'default'
        this.state.color[i] = ''
        this.state.final_eval[i] = 'default'
        this.state.final_right[i] = 'default'
        this.state.final_paragraph[i] = 'default'

        this.setState(
            {
          values: this.state.values,
          eval : this.state.eval,
          color:  this.state.color,
          final_eval: this.state.final_eval,
          final_right: this.state.final_right,
          final_paragraph: this.state.final_paragraph,

        })
      }
    }
  }



    }






  render(){



if (this.state.number  < Object.keys(this.props.data).length) {
    var my_number = this.state.number
    var name = ''
    if (this.state.stage == 'start') {
      name = 'Подтвердить'
    }
    else if (this.state.stage == 'validation') {
      name = 'Оценить'
    }
    else if (this.state.stage == 'evaluation') {
      name = 'Оценить'
    }


    var temp_dic = {}
    var answer_list = this.props.data[this.state.number].answer.split(';')


     var lemma_list = this.props.data[this.state.number].lemma.split(';')


     var feedback_list = this.props.data[this.state.number].feedback.split(';')


    for (var i=0;i< answer_list.length; i++){
      temp_dic[i] = [answer_list[i], lemma_list[i]]
    }
    var frase = this.props.data[this.state.number].sentence
    var new_frase1 = ''
    var num1 = 0
    var t = 0
    for (var t; t<frase.length; t++){
      if(frase[t] == '$'){
        num1 += 1
      }
      if(frase[t] == '$'  && num1%2!=0){
        new_frase1 += '$%'
      }
      else{
        new_frase1 += frase[t]
      }
    }


    frase = new_frase1.split('$')
    var count = 0
    var color = this.state.color
    const new_frase = frase.map((sent, index) => {

      if (sent.includes('%')){
      count++
      index = index - count
        return <input ref={this.myRef} key = {index} placeholder= {`(${lemma_list[count-1]})`}  style={{width:'100px', border: 'solid 2px #8FBC8B', padding: '4px', height:'30px', margin:'5px', backgroundColor: color[index]}}
            onChange={(e)=>{this.handleInputChange(e,index)}}
          />

        }
       else {
           return <p style={{display:'inline'}}> {sent} </p>
         }

       }
    )


    var post_text = <div> </div>
    var list1 = ['Да', 'Нет', 'Не уверен']
    var list2 = ['1', '2', '3', '4', '5']

    switch(this.state.stage){
        case 'evaluation':
          post_text =  <div style={{marginTop:'10px'}}>

          <Alert  variant='success' style={{width: '500px'}}>   {renderHTML(feedback_list[this.state.counter-1])}  </Alert>
            <div>Согласны ли Вы с ответом, предложенным системой</div>
            <ButtonGroup aria-label="Basic example" style={{marginTop:'5px'}} ref={this.myRef3} >
              {
              list1.map((item, index)=>  {return <Button variant="secondary" onClick={(e)=>{this.HandleRight(e, item, index)}} style={{backgroundColor: this.state.right_color[index], color:'#1d95db', margin: '10px', borderRadius:'5px', borderColor: '#1d95db'}}>{item}</Button>})}

            </ButtonGroup>
          <div>Оцените пояснение, предложенное системой</div>
          <ButtonGroup aria-label="Basic example" ref={this.myRef2} style={{marginTop:'5px'}} onChange={(e)=>{this.HandleSelect(e)}}>
            {
            list2.map((item, index)=>  {return <Button variant="secondary" onClick={(e)=>{this.HandleSelect(e, item, index)}} style={{backgroundColor: this.state.eval_color[index], color:'#1d95db', margin: '10px', borderRadius:'5px', borderColor: '#1d95db'}}>{item}</Button>})}

          </ButtonGroup>
        </div>
        break;

          case 'validation':

            post_text = <div style={{marginTop:'10px'}}>
            <div> Оцените качество текста, выбранного в качестве материала для задания, по шкале от 1 до 5</div>


          <ButtonGroup aria-label="Basic example" style={{marginTop:'5px'}} >
                {
                list2.map((item, index)=>  {return <Button variant="secondary" onClick={(e)=>{this.HandlePar(e, item, index)}} style={{backgroundColor: this.state.paragraph_color[index], color:'#1d95db', margin: '10px', borderRadius:'5px', borderColor: '#1d95db'}}>{item}</Button>})}
                </ButtonGroup>

          <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Вы можете оставить свой комментарий</Form.Label>
        <Form.Control as="textarea" rows={3} style={{width:'500px'}} onChange={(e)=>this.HandelChangeArea(e)}/>
        </Form.Group>
        </Form>


          </div>;
            break;

    }

   return (
     <div>

       <center style={{marginTop:'100px', marginRight: '100px', marginLeft:'100px'}}>
           <div >
         {new_frase}
       </div>
      </center>


      <center style={{marginTop:'20px'}}>
        <div style={{height:'200px'}} >
        {post_text}
      </div>
     </center>


     <div >
      <center style={{marginTop:'150px'}}>
         <Button onClick={this.HandleChange} variant="info">  {name}</Button>
         <p style={{fontSize: '20px', margin:'10px'}}>í é á ó ú</p>
     </center>
   </div>


    <div >
     <ProgressBar now={my_number*100/this.props.data.length}  variant="info" style={{margin:'100px'}}/>
    </div>
   </div>
   )



}

else{

return (


  <div>
    <center style={{marginTop:'100px', height: '600px'}}>
    <h1>Спасибо, эксперимент завершен!</h1>
    <Button onClick={this.HandleBtn} variant="info" >Выйти</Button>
   </center>


</div>

)

}


 }
}

const mapStateToProps = (state) => {

    return {
      sentence: state.sentence.sentence,
      value :state.sentence.value,
      token :   state.auth.token,
      answer: state.sentence.sentence,
      users : state.users.users,
      email : state.auth.email,




  }
}


export default withRouter(connect(mapStateToProps, {postD,myUser, mySentence, logout, youOrden})(Test))
