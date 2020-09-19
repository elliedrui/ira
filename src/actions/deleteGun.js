export const deleteGun = (gunId, personaId, memberId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/members/${memberId}/personas/${personaId}/guns/${gunId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(persona => dispatch({type: 'DELETE_GUN', payload: persona}))
  }
}