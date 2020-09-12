import React from 'react'
import {connect} from 'react-redux'
import {fetchPersonas} from '../actions/fetchPersonas'

import Personas from '../components/Personas'
import PersonasInput from '../components/PersonaInput'

class PersonasContainer extends React.Component {

  componentDidMount(props) {
    this.props.fetchPersonas()
  }

  render() {
    return(
      <div>
        woop woop changes inside the PersonasContainer
        <Personas personas={this.props.personas}/>
        <PersonasInput/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    personas: state.personas
  }
  
}

export default connect(mapStateToProps, {fetchPersonas})(PersonasContainer)