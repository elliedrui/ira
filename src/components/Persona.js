import React from 'react'

const Persona = (persona) => {
console.log('in persona show', persona)
  
  return (
    <>
      <td>{persona.persona.id}</td>
      <td>{persona.persona.attributes.first_name} {persona.persona.attributes.last_name}</td>
      <td>{persona.persona.attributes.dob}</td>
      <td>{persona.persona.attributes.sex}</td>
      <td>{persona.persona.attributes.race}</td>
      <td style={{width: "10%"}}>{persona.persona.attributes.notes}</td>
      <td style={{width: "10%"}} >{persona.persona.attributes.faction.name}</td>
      <td>{persona.persona.attributes.member.name}</td>
      <td></td> 
    </>
  )

}

export default Persona

