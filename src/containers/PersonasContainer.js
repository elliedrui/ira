import React from 'react'
import {connect} from 'react-redux'
import {fetchPersonas} from '../actions/fetchPersonas'
import {Route} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Personas from '../components/Personas'
import Persona from '../components/Persona'
import PersonaInput from '../components/PersonaInput'

class PersonasContainer extends React.Component {

  componentDidMount(props) {
    this.props.fetchPersonas()
  }

  render() {
    return(
      
<Card class="mx-auto" style={{ width: '900px' }}>
        <Route path='/personas/new' component={PersonaInput} />
        <Route path='/personas/:id' render={ (routerProps) => <Persona {...routerProps} personas={this.props.personas}/> } />
        <Route exact path='/personas' render={ (routerProps) => <Personas {...routerProps} personas={this.props.personas}/> } />
        <br/>
        <br/>
        </Card>   
      
    )
  }
}

const mapStateToProps = state => {
  return {
    personas: state.personas
  }
  
}

export default connect(mapStateToProps, {fetchPersonas})(PersonasContainer)