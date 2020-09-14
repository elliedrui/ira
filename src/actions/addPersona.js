export const addPersona = (data) => {
  console.log('in the add', data)
  return (dispatch) => {
    
    fetch('http://localhost:3000/api/v1/personas', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(persona => dispatch({
      type: 'ADD_PERSONA', 
      payload: persona.data
    }))
    .then(response => response.json())
    .then(persona => dispatch({
      type: 'ADD_PERSONA', 
      payload: persona.data
    }))

  }

};