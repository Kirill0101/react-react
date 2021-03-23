import React from 'react';
import Info from './Info.jsx'
import Test from './Test.jsx'
import { Link, withRouter } from 'react-router-dom'

import { mySentence } from './redux/sentence-reducer.js'
import { connect } from 'react-redux'



class Experiment extends React.Component {

  state = {
    start: false,
    data:  ''
  }

  componentDidMount() {
    this.props.mySentence()
    console.log(this.props.sentence)


  }

   handleClick = (event) => {

        this.setState(
            {
          start: true,
          data : this.props.sentence
        })
          }



  render(){



    const start =this.state.start
   return (
     <div>
     { !start ? <Info start={this.handleClick}/> :
     <Test data={this.state.data} />
   }
   </div>
   )
 }
}

const mapStateToProps = (state) => {

    return {
      sentence: state.sentence.sentence,

  }
}


export default withRouter(connect(mapStateToProps,{mySentence})(Experiment))
