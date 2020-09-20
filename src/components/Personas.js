import React from 'react';
// import Persona from './Persona';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';

const Personas = (props) => {
  console.log('in the personas.js', props.persona)
  return (

      <>
        <Card className='personas-card card' >
          
        <h2>Personas</h2>
        
    
        {props.personas.map(persona => 
          <li key={persona.id}><Link className='App-link' to={`/personas/${persona.id}`}> {persona.attributes.first_name} </Link>
          
          </li>
          )}
        </Card>
        
      </>

  )
};

export default Personas