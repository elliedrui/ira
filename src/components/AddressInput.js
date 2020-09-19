import React from 'react';
import {connect} from 'react-redux';
import {addAddress} from '../actions/addAddress';


class AddressInput extends React.Component {
  
  personaId = this.props.id;

  state = {
    street_number: '',
    street_name: '',
    zip_code: '',
    persona_id: this.props.personaId,
    member_id: this.props.memberId
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handlesubmit', this)
    alert('GUN!')
    this.props.addAddress(this.state, this.props.personaId, this.props.memberId)
    this.setState({
      street_number: '',
      street_name: '',
      zip_code: '',
      apt_number: '',
      unit_type: '',
      has_interior: '',
      persona_id: this.props.personaId,
      member_id: this.props.memberId
    })
  };
 
  render() {
    console.log('in the gunput', this)
    return (

      <div>
        <h2>
          Register a New Address
        </h2>
        <form onSubmit={this.handleSubmit}>

          <label>Model</label>
          <input type='text' placeholder='street_number' value={this.state.street_number} name='street_number' onChange={this.handleChange} />
          <label>Street Name</label>
          <input type='text' placeholder='street_name' value={this.state.street_name} name='street_name' onChange={this.handleChange} />
          <label>Description / Notes</label>
          <input type='text' placeholder='zip_code' value={this.state.zip_code} name='zip_code' onChange={this.handleChange} />
          <input type='hidden' value={this.state.persona_id} name='persona_id'/>
          <input type='hidden' value={this.state.member_id} name='member_id'/>
          <input type='submit'/>

        </form>
      </div>
    )
  };
};

export default connect(null, {addAddress})(AddressInput)