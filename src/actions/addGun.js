export const addGun = (gunData, personaId, memberId) => {
  console.log('in the add', gunData, personaId, memberId)
  return (dispatch) => {
    // debugger
    fetch(`http://localhost:3000/api/v1/members/${memberId}/personas/${personaId}/guns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(gunData)
    })
    .then(console.log('in the gun then', gunData))
    .then(response => response.json())
    .then(persona => {
      console.log('in the next then', persona)
      if (persona.error) {
        alert(persona.error)
      } else {
          dispatch({
            type: 'ADD_GUN', 
            payload: persona.data
        })
      }

    } )
  

  }

};