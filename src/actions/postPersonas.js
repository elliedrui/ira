export function postPersonas() {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/personas')
    .then(response => response.json())
    .then(personas => dispatch({
      type: 'POST_PERSONAS',
      payload: personas.data
    }))
  }



}