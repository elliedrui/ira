import React from 'react';
import AddressInput from '../components/AddressInput';
import Addresses from '../components/Addresses';


class AddressesContainer extends React.Component {
  render () {

    let persona = this.props.persona
    console.log("Addresses container", this.props)

    return (
      <>
        <br/>
        <h2>Addresses</h2>
        <Addresses addresses={this.props.persona && this.props.persona.attributes.addresses}/>
        <AddressInput personaId={persona && persona.id} memberId={ persona && persona.attributes.member.id}/> 
        <br/>
      </>
      
    )
  }


}

export default AddressesContainer