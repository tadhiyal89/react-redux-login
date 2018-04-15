import {GET_ALL_TASKS,GET_ALL_SEARCH,SAVE_ALL_SEARCH} from '../constant/constant'
/////////////////REDUCER/////////////////////

//initiate your starting state
let initial = {
  tasks: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case SAVE_ALL_SEARCH:
      return Object.assign({}, state, {'searchResults': action.tasks});
    default:
      return state;
  }

};

export default reducer;
