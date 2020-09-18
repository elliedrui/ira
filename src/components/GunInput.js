import React from 'react';

class GunInput extends React.Component {

  state = {
    model: '',
    serial_number: '',
    description: '',
    persona_id: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handlesubmit = (event) => {
    event.preventDefault()
    alert('GUN!')
    this.props.addGun(this.state)
    this.setState({
    })
  };

  render() {

    return (

      <div>
        <h2>
          Register a New Gun
        </h2>
        <form onSubmit={this.handleSubmit}>

          <label>Model</label>
          <input type='text' placeholder='model' value={this.state.model} name='model' onChange={this.handleChange} />
          <label>Serial Number</label>
          <input type='text' placeholder='serial_number' value={this.state.serial_number} name='serial_number' onChange={this.handleChange} />
          <label>Description / Notes</label>
          <input type='text' placeholder='description' value={this.state.description} name='description' onChange={this.handleChange} />
          <input type='hidden' value={this.state.persona_id} name='persona_id'/>
          <input type='submit'/>

        </form>
      </div>
    )
  };
};

export default GunInput