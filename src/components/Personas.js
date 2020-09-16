import React from 'react';
// import Persona from './Persona';
import {Link} from 'react-router-dom'
// import {Card} from 'react-bootstrap';

const Personas = (props) => {
  console.log('in the personas.js', props)
  return (

      <>
        
        <h2>Personas</h2>
        
    
        {props.personas.map(persona => 
          <li key={persona.id}><Link to={`/personas/${persona.id}`}> {persona.attributes.first_name} </Link>
          
          </li>
          )}
      
        
      </>

  )
};

export default Personas