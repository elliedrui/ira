import React from 'react';
import GunInput from '../components/GunInput';
import Guns from '../components/Guns';


class GunsContainer extends React.Component {

  

  render () {
    let persona = this.props.persona
    console.log("guncontainer", this.props)
    return (
      <div className="App-container" >

        GunsContainer yo
        <Guns guns={this.props.persona && this.props.persona.attributes.guns}/>
        <GunInput personaId={persona && persona.id} memberId={ persona && persona.attributes.member.id}/> 

      </div>

    )




  }





}

export default GunsContainer