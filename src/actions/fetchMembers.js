
export function fetchMembers() {

  fetch('http://localhost:3000/api/v1/members')
  .then(response => response.json())
  .then(data => console.log('in the fetch', data))

}