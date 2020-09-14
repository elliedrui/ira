import React from 'react'
import {connect} from 'react-redux'
import {fetchPersonas} from '../actions/fetchPersonas'
import {Card} from 'react-bootstrap';
import Personas from '../components/Personas'
import PersonasInput from '../components/PersonaInput'

class PersonasContainer extends React.Component {

  componentDidMount(props) {
    this.props.fetchPersonas()
  }

  render() {
    return(
      <div class="mx-auto" style={{ width: '900px' }}>
        
        <Card class="mx-auto" style={{ width: '900px' }}>
          
          <Personas personas={this.props.personas}/><br/>
        </Card>
        <br/>
        <Card class="mx-auto" style={{ width: '800px' }}>
          <PersonasInput/><br/>
        </Card>
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