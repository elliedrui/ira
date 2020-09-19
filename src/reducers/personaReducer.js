export default function personaReducer(state = {
  personas: [],
  
}, action) {
  switch (action.type) {
    
    case 'FETCH_PERSONAS':
      return {personas: action.payload};   
    case 'ADD_PERSONA':
      console.log('in the case add persona', action)
      return {...state, personas: [...state.personas, action.payload]}
    case 'ADD_GUN':
      
      let personas = state.personas.map(persona => {
        if (persona.id === action.payload.id ) {
          return action.payload
        } else {
          return persona
        }
      })
      return {...state, personas: personas}
    case 'ADD_ADDRESS':
    
      let personasFour = state.personas.map(persona => {
        if (persona.id === action.payload.id ) {
          return action.payload
        } else {
          return persona
        }
      })
      return {...state, personas: personasFour}
    case 'DELETE_GUN':
      let personasTwo = state.personas.map(persona => {
        if (persona.id === action.payload.id) {
          return action.payload
        } else {
          return persona
        }
      })
      return {...state, personas: personasTwo}
    case 'EDIT_PERSONA':
      let personasThree = state.personas.map(persona => {
        if (persona.id === action.payload.id) {
          return action.payload
        } else {
          return persona
        }
      })
      return {...state, personas: personasThree}
    default:
      return state;
  }    
}

