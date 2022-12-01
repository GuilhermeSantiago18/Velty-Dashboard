import { GET_SEARCH } from "../actions";

const INITIAL_STATE = {
  myState: '',
};


function homePage(state = INITIAL_STATE, action) {
    switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        myState: action.payload,
      };
    default:
      return state;
    }
  }
  
  export default homePage;
  