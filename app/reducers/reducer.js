import {GET_ALL_TASKS,GET_ALL_SEARCH} from '../constant/constant'
/////////////////REDUCER/////////////////////

//initiate your starting state
let initial = {
  tasks: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_SEARCH:
    debugger
      return Object.assign({}, state, {'searchResults': action.tasks});
    default:
      return state;
  }

};

export default reducer;
