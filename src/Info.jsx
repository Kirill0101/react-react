import React from 'react';


class Info extends React.Component {



  render(){

   return (
     <div style={{margin:'100px'}}>
      <div style={{border:'solid',borderRadius:'9px' ,height: '50px', paddingTop:'100px'}}>
      <center>
        Это информация про эксперимент
      </center>
      <center>
      <button style={{marginTop:'200px'}} onClick={this.props.start}>
        Начать
      </button>
      </center>

      </div>
     </div>
   )
 }
}

export default Info
