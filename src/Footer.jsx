import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {

  render(){


    return(

      <Navbar bg="dark" variant="dark" style={{color:'white'}}>

        <p>По любым вопросам и проблемам с экспериментом вы можете обратиться по вдресу ulyanaisaevaaa@gmail.com.</p>
        <p>Эксперимент проводит Ульяна Исаева, студентка Отделения теоретической и прикладной лингвистики филологического факультета МГУ им. М.В. Ломоносова.</p>

        </Navbar>
    )
  }


}

export default Footer
