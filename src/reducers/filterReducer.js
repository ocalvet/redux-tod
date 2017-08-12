import { persistentReducer } from 'redux-pouchdb-plus';
import { FILTER_COMPLETED } from '../actions/actionTypes';

const filter = (state = { filterCompleted: false }, action) => {
  switch (action.type) {
    case FILTER_COMPLETED:
      return {...state, filterCompleted: !state.filterCompleted};
    default:
      return state;
  }
}

export default persistentReducer(filter);