export default function personaReducer(state = {
  personas: [],
}, action) {
  switch (action.type) {
    case 'FETCH_PERSONAS':
      
      return {personas: action.payload};

    default:
      return state;
  }
      
}