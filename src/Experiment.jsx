import React from 'react';
import Info from './Info.jsx'
import Test from './Test.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import { Link, withRouter } from 'react-router-dom'
import { myOrden, youOrden, myOrden1} from './redux/users-reducer.js'

import { mySentence,setValue} from './redux/sentence-reducer.js'
import { connect } from 'react-redux'




class Experiment extends React.Component {

  state = {
    start: false,
    data:  '',
    exp : 1,
    try: '',
    exp_set: ''
  }

  componentDidMount() {
    this.props.setValue('First')

    this.props.mySentence(this.props.token, this.props.value)

  }

 componentDidUpdate(prevProps){
   if (this.props.value != prevProps.value){
  this.props.mySentence(this.props.token, this.props.value)}

 }

   handleClick = (event, exp=1) => {

     var user_n = this.props.users_n
     var current_user
     var new_data = []

     user_n.forEach((item)=>{

     if (item['user_mail'] == this.props.email){
       current_user = item
     }}
   )
      var old_data = this.props.sentence

      var new_list = []

      if (parseInt(current_user['user_number'])%2 != 0){
        new_list.push(parseInt(current_user['user_number']))
        new_list.push(parseInt(current_user['user_number']) + parseInt(1))
      }
    else if (parseInt(current_user['user_number'])%2 == 0){
        new_list.push(parseInt(current_user['user_number']) - parseInt(1))
        new_list.push(parseInt(current_user['user_number']))
      }

      var index = 0
      if (this.props.value == 'Second'){
        index = 1
      }
      else if (this.props.value == 'First'){
            index = 0
          }

      if (parseInt(current_user['user_try'].split(';')[index])%2 == 0){
        new_list = new_list[0]
        var put_dic = {}
        put_dic['id'] = current_user['id']
        put_dic['user_mail'] = current_user['user_mail']
        put_dic['user_number'] = current_user['user_number']
        var list_user = current_user['user_try'].split(';')
        list_user[index] = parseInt(list_user[index]) + 1
        var u_try = list_user.join(';')
        put_dic['user_try'] =  u_try



        this.props.myOrden1(put_dic, parseInt(current_user['id']))
       }
       else if (parseInt(current_user['user_try'].split(';')[index])%2 != 0){
           new_list = new_list[1]
           var put_dic = {}
           put_dic['id'] = current_user['id']
           put_dic['user_mail'] = current_user['user_mail']
           put_dic['user_number'] = current_user['user_number']
           var list_user = current_user['user_try'].split(';')
           list_user[index] = parseInt(list_user[index]) + 1
           var u_try = list_user.join(';')
           put_dic['user_try'] =  u_try



           this.props.myOrden1(put_dic, parseInt(current_user['id']))

          }



      old_data.forEach((item)=>{

        if (new_list == parseInt(item['exp_set'])){

          new_data.push(item)
        }

      })
        this.setState(
            {
          start: true,
          data : new_data,
          try: u_try,
          exp_set:new_list
            })

          }



  render(){



    const start =this.state.start
  

   return (
     <>
     <Header />
     <div>
     { !start ? <Info start={this.handleClick}/> :
     <Test data={this.state.data} try={this.state.try}  set={this.state.exp_set}/>
   }
   </div>
   <Footer />
   </>
   )
 }
}

const mapStateToProps = (state) => {

    return {
      sentence: state.sentence.sentence,
      token :   state.auth.token,
      value: state.sentence.value,
      users_n : state.users.users_number,
      email : state.auth.email,




  }
}


export default withRouter(connect(mapStateToProps,{mySentence, youOrden, myOrden1, setValue})(Experiment))
