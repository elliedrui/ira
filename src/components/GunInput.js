import React from 'react';
import {connect} from 'react-redux';
import {addGun} from '../actions/addGun';


class GunInput extends React.Component {
  
  personaId = this.props.id;

  state = {
    model: '',
    serial_number: '',
    description: '',
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
    this.props.addGun(this.state, this.props.personaId, this.props.memberId)
    this.setState({
      model: '',
      serial_number: '',
      description: '',
      persona_id: this.props.personaId,
      member_id: this.props.memberId
    })
  };
 
  render() {
    console.log('in the gunput', this)
    return (

      <div class="col-sm d-flex">
      <div className='card card-body flex-fill'>
        <h4>
          Register a New Gun
        </h4>
        <form onSubmit={this.handleSubmit} inline>

          <label>Model</label>
          <input type='text' placeholder='model' value={this.state.model} name='model' onChange={this.handleChange} />
          <label>Serial Number</label>
          <input type='text' placeholder='serial_number' value={this.state.serial_number} name='serial_number' onChange={this.handleChange} />
          <label>Description / Notes</label>
          <input type='text' placeholder='description' value={this.state.description} name='description' onChange={this.handleChange} />
          <input type='hidden' value={this.state.persona_id} name='persona_id'/>
          <input type='hidden' value={this.state.member_id} name='member_id'/>
          <input type='submit'/>

        </form>
      </div>
      </div>
    )
  };
};

export default connect(null, {addGun})(GunInput)