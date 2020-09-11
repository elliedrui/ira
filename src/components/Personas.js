import React from 'react'

const Personas = (props) => {
  return (
    <div>
      <h2>Personas</h2>
      {props.personas.map(persona => 
      <li key={persona.id}> 
          {persona.attributes.first_name} {persona.attributes.last_name} - {persona.attributes.dob} - {persona.attributes.sex} - {persona.attributes.race} 
        </li>
      )}
    </div>
  )
}

export default Personas