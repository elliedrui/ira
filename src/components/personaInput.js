import React from 'react'
import {addPersona} from '../actions/addPersona'
import {connect} from 'react-redux'



class PersonaInput extends React.Component {

  state = {
    first_name: '',
    last_name: '', 
    dob: null, 
    sex: '', 
    race: '', 
    notes: '', 
    member_id: null , 
    faction_id: null
  };

handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    alert('what have you done?')
    this.props.addPersona(this.state)

  };

  render () {
    return(
      <div>
        <h2>Create a new Persona</h2>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label><br/>
          <input type='text' placeholder='First Name' value={this.state.first_name} name='first_name' onChange={this.handleChange} /><br/>
          <label>Last Name</label><br/>
          <input type='text' placeholder='Last Name' value={this.state.last_name} name='last_name' onChange={this.handleChange} /><br/>
          <label>Date of Birth</label><br/>
          <input type='date' placeholder='Date of Birth' value={this.state.dob} name='dob' onChange={this.handleChange} /><br/>
          <label>Sex</label><br/>
          <input type='text' placeholder='Sex' value={this.state.sex} name='sex' onChange={this.handleChange} /><br/>
          <label>Race</label><br/>
          <input type='text' placeholder='Race' value={this.state.race} name='race' onChange={this.handleChange} /><br/>
          <label>Notes</label><br/>
          <input type='textarea' placeholder='Notes' value={this.state.notes} name='notes' onChange={this.handleChange} /><br/>
          <label>Select Member</label><br/>
          <select value={this.state.value} name='member_id' onChange={this.handleChange}>
            <option value="0">Select member:</option>
            <option value="1">brendo</option>
            <option value="2">fussler</option>
            <option value="3">certru</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
          </select>
          <br/>
          <label>Select Faction</label><br/>
          <select name='faction_id' value={this.state.value} onChange={this.handleChange}>
            <option value="0">Select Faction:</option>
            <option value="1">cops</option>
            <option value="2">robbers</option>
            <option value="3">taxi</option>
            <option value="4">none</option>
          </select>
          <br/>
          <input type='submit' />
        </form>
      </div>

    )
  }

}

export default connect(null, {addPersona})(PersonaInput)