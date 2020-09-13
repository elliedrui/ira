export default function memberReducer(state = {
  members: [],
  }, action) {
    switch (action.type) {
      case 'FETCH_MEMBERS':
        return {members: action.payload};
      default:
        return state;
  }

}

