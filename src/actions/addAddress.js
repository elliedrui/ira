export const addAddress = (addressData, personaId, memberId) => {
  console.log('in the add address', addressData, personaId, memberId)
  return (dispatch) => {
    debugger
    fetch(`http://localhost:3000/api/v1/members/${memberId}/personas/${personaId}/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(addressData)
    })
    .then(console.log('in the address then', addressData))
    .then(response => response.json())
    .then(persona => {
      console.log('in the next then', persona)
      if (persona.error) {
        alert(persona.error)
      } else {
          dispatch({
            type: 'ADD_ADDRESS', 
            payload: persona.data
        })
      }
    })
  }
};