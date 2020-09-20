import React from 'react';
import {connect} from 'react-redux';
import {addAddress} from '../actions/addAddress';


class AddressInput extends React.Component {
  
  personaId = this.props.id;

  state = {
    street_number: 0,
    street_name: '',
    zip_code: 0,
    apt_number: '',
    unit_type: '',
    has_interior: false,
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
    alert('New Address Registered!')
    this.props.addAddress(this.state, this.props.personaId, this.props.memberId)
    this.setState({
      street_number: 0,
      street_name: '',
      zip_code: 0,
      apt_number: '',
      unit_type: '',
      has_interior: false,
      persona_id: this.props.personaId,
      member_id: this.props.memberId
    })
  };

  render() {
    console.log('in the address input', this)
    return (
      <div class="col-sm d-flex">
      <div className='card card-body flex-fill'>
        <h2>
          Register a New Address
        </h2>
        <form onSubmit={this.handleSubmit}>

          <label>Street Number</label>
          <input type='number' placeholder='street_number' value={this.state.street_number} name='street_number' onChange={this.handleChange} />
          <label>Street Name</label>
          <input type='text' placeholder='street_name' value={this.state.street_name} name='street_name' onChange={this.handleChange} />
          <label>Zip Code</label>
          <input type='number' placeholder='zip_code' value={this.state.zip_code} name='zip_code' onChange={this.handleChange} />
          
          <br/>
          <label>Apt Number</label>
          <input type='text' placeholder='apt_number' value={this.state.apt_number} name='apt_number' onChange={this.handleChange} />
          <br/>
          <label>Unit Type</label>
          <select value={this.state.value} name='unit_type'>
            <option value="0">Select Unit Type</option>
            <option value="house">House</option>
            <option value="apt">Apartment</option>
          </select>
          <br/>
          <label>Has Interior?</label>
          <select value={this.state.value} name='has_interior'>
            <option value="0">Select if Has interior</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <br/>



          <input type='hidden' value={this.state.persona_id} name='persona_id'/>
          <input type='hidden' value={this.state.member_id} name='member_id'/>
          
          <input type='submit'/>

        </form>
      </div>
      </div>
    )
  };
};

export default connect(null, {addAddress})(AddressInput)