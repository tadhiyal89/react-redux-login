import axios from "axios";
import {GET_ALL_TASKS,GET_ALL_SEARCH} from '../constant/constant'
const getAllSearch = (tasks) => ({type: GET_ALL_SEARCH, tasks});
/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export function getAllTasks(info){
  
	return function(dispatch){axios.get(`https://swapi.co/api/planets/?search=${info}`)
    .then((response) => {
      debugger
      dispatch(getAllSearch(response.data));
    })
    .then((result) => {
      debugger
      dispatch(getAllSearch(result))
    })
    .catch((err) => {
      console.error.bind(err);
    })
  }
};

/////// end //////
