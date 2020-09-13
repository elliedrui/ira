
export function fetchMembers() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/members')
    .then(response => response.json())
    .then(members => dispatch({
      type: 'FETCH_MEMBERS',
      payload: members.data
    }))
  }
}
