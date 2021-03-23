import React from 'react';

import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { postD } from './redux/sentence-reducer.js'


class Test extends React.Component {

  constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.myRef2 = React.createRef();
    }

  state = {
    stage : 'start',
    correct : false,
    validation : '',
    number : 0,
    values : [],
    eval : [],
    paragraph: '1',
    counter: 0,
    color: []

  }

  componentDidMount(){

    var lemma_list = this.props.data[this.state.number].lemma.split(';')
    for (var i=0;i< lemma_list.length; i++){
      this.state.values[i] = 'not'
      this.state.eval[i] = 1
      this.state.color[i] = ''
      this.setState(
          {
        values: this.state.values,
        eval : this.state.eval,
        color:  this.state.color
      })
    }




  }

    HandleState = (index) =>{
    this.state.values[index] = ''
    this.setState(
        {
      values: this.state.values,
    })
  }


  handleInputChange = (e,index) => {

    this.state.values[index] = e.target.value


  this.setState(
      {
    values: this.state.values,
  })
}

  HandleSelect = (e) =>{

    this.state.eval[this.state.counter] = e.target.value

    this.setState(
        {
      values: this.state.eval,
    })

  }

  HandlePar = (e) => {
    var val = e.target.value
    this.setState(
        {
      paragraph: val
    })
    console.log(this.state.paragraph)
  }




  HandleChange = (event) => {

/*
    const val = this.myRef.current.value
    if (val == this.props.data[this.state.number].answer) {
      this.setState(
          {
        correct: true,
      })
    }
    */

    if (this.state.stage == 'start') {
        this.state.color[0] = 'blue'
      this.setState(
          {
        stage: 'evaluation',
        color:   this.state.color

      })
    }

    var len = this.props.data[this.state.number].feedback.split(';').length  - 1
    if (this.state.stage == 'evaluation' && this.state.counter == len) {

        for (var i =0; i< this.state.color.length;i ++ ){
            this.state.color[i] = ''


        }

      this.setState(
          {
        stage: 'validation',
        color:   this.state.color

      })
    }
    else if (this.state.stage == 'evaluation'  && this.state.counter < len){

      for (var i =0; i< this.state.color.length;i ++ ){
        if (i == this.state.counter+1){
          this.state.color[i] = 'blue'
        }
        else {
          this.state.color[i] = ''
          }
        }

        this.setState(
            {
            counter : this.state.counter + 1,
            color:   this.state.color

        })
      }




    if (this.state.stage == 'validation'){

      console.log(this.state.values)
      /*
      this.myRef.current.value = ''
      const val1 = this.myRef2.current.value
      */
      var new_dic = {}
      new_dic["user_name"] = 'Vasya'
      new_dic["correct_answer"] = this.state.values.join(';')
      new_dic["valuation"] = this.state.eval.join(';')
      new_dic["sentence_id"] = this.props.data[this.state.number].id.toString()
      new_dic['paragraph'] = this.state.paragraph
      this.props.postD(new_dic)

      this.setState(
          {
        stage: 'start',
        number: this.state.number + 1,
        correct : false,
        validation : '',
        values : [],
        eval : [],
        paragraph: '',
        counter: 0,
        color: []
      })

      var lemma_list = this.props.data[this.state.number].lemma.split(';')
      for (var i=0;i< lemma_list.length; i++){
        this.state.values[i] = 'not'
        this.state.eval[i] = 1
        this.state.color[i] = ''
        this.setState(
            {
          values: this.state.values,
          eval : this.state.eval,
          color:  this.state.color
        })
      }

    }



    }



  render(){



if (this.state.number  < Object.keys(this.props.data).length) {
    var my_number = this.state.number
    var name = ''
    if (this.state.stage == 'start') {
      name = 'answer'
    }
    else if (this.state.stage == 'validation') {
      name = 'submit'
    }
    else if (this.state.stage == 'evaluation') {
      name = 'evaluate'
    }


    var temp_dic = {}
    var answer_list = this.props.data[this.state.number].answer.split(';')
    var lemma_list = this.props.data[this.state.number].lemma.split(';')
    var feedback_list = this.props.data[this.state.number].feedback.split(';')
    for (var i=0;i< answer_list.length; i++){
      temp_dic[i] = [answer_list[i], lemma_list[i]]
    }
    var frase = this.props.data[this.state.number].sentence
    frase = frase.split('$')
    var count = 0
    var color = this.state.color
    const new_frase = frase.map((sent, index) => {

      if (sent== lemma_list[count]){
      count++
      index = index - count
      console.log(color)
        return <input ref={this.myRef} key = {index} placeholder= {`(${lemma_list[count-1]})`}  style={{width:'90px', border: '0px', padding: '5px', backgroundColor: color[index]}}
            onChange={(e)=>{this.handleInputChange(e,index)}}
          />

        }
       else {
           return <p style={{display:'inline'}}> {sent} </p>
         }

       }
    )


    var post_text = <div> </div>
    switch(this.state.stage){
        case 'evaluation':

          post_text =  <div style={{marginTop:'10px'}}>
          <div> {feedback_list[this.state.counter]}   </div>
          <select  ref={this.myRef2} style={{marginTop:'5px'}} onChange={(e)=>{this.HandleSelect(e)}}>
            <option value='1'> 1 </option>
            <option value='2'> 2 </option>
            <option value='3'> 3 </option>
            <option value='4'> 4 </option>
            <option value='5'> 5 </option>
          </select>
        </div>
        break;

          case 'validation':

            post_text = <div style={{marginTop:'10px'}}>
            <div> Оцените качество параграфа   </div>
            <select style={{marginTop:'5px'}} onChange={(e)=>{this.HandlePar(e)}}>
              <option value='1'> 1 </option>
              <option value='2'> 2 </option>
              <option value='3'> 3 </option>
              <option value='4'> 4 </option>
              <option value='5'> 5 </option>
            </select>
          </div>;
            break;

    }

   return (
     <div>
       <center style={{marginTop:'100px'}}>
         {new_frase}
      </center>
      <center style={{marginTop:'100px'}}>
        <div>
        {post_text}
      </div>
     </center>


      <center style={{marginTop:'100px'}}>
        <button onClick={this.HandleChange} >
          {name}
      </button>
     </center>
     <ProgressBar now={my_number*100/this.props.data.length} style={{margin:'100px', }}/>

   </div>
   )



}

else{

return (
  <div>
    <center style={{marginTop:'100px'}}>
    Thank you!

   </center>


</div>

)

}


 }
}

const mapStateToProps = (state) => {

    return {
      sentence: state.sentence.sentence,

  }
}


export default withRouter(connect(mapStateToProps, {postD})(Test))
