import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Experiment from './Experiment.jsx'
import Questionary from './Questionary.jsx'
import Completed from './Completed.jsx'

import Login from './Login.jsx'
import Sign from './Sign.jsx'


const BaseRouter = (props) => {

  return(
    <div>
      <Route exact path='/' component = {Login}/>
      <Route exact path='/experiment' component={Experiment}/>
      <Route exact path='/sign' component={Sign}/>
      <Route exact path='/questionary' component={Questionary}/>
      <Route exact path='/completed' component={Completed}/>

    </div>
)
}

export default BaseRouter
