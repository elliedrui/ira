export default function personaReducer(state = {
  personas: [],
}, action) {
  switch (action.type) {
    case 'FETCH_PERSONAS':
      
      return {personas: action.payload};
    case 'ADD_PERSONA':
      return {...state, personas: [...state.personas, action.payload]}

    default:
      return state;
  }
      
}