import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Experiment from './Experiment.jsx'
import Login from './Login.jsx'


const BaseRouter = (props) => {

  return(
    <div>
      <Route exact path='/' component = {Login}/>
      <Route exact path='/experiment' component={Experiment}/>

    </div>
)
}

export default BaseRouter
