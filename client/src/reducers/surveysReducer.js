import { FETCH_SURVEYS } from "../actions/types";

const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload || false;
    default:
      return state;
  }
};

export default surveysReducer;
