import /* we need our action types here*/ "../actions";
import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {characters: action.characters, fetching: true, error: state.error}
    case SUCCESS:
      return {...state, fetching: false}
    case FAILURE:
      return {...state, fetching: false, error: 'There was an error'}
    default:
      return state;
  }
};
