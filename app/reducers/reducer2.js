import {INCREMENT,DECREMENT} from '../constant/constant'
/////////////////REDUCER/////////////////////

//initiate your starting state
let initial = {counter:0};

const reducer2 = (state = initial, action) => {
switch (action.type) {
    case 'Increment':
      return Object.assign({}, state, {counter: state.counter+1});
      break;
    case 'Decrement':
      return Object.assign({}, state, {counter: state.counter-1});
      break;
    default:
      return state;
  }

};

export default reducer2;
