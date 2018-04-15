import axios from "axios";
import {GET_ALL_TASKS,GET_ALL_SEARCH,SAVE_ALL_SEARCH} from '../constant/constant'
const getAllSearch = (tasks) => ({type: GET_ALL_SEARCH, tasks});
const saveAllSearch = (tasks) => ({type: SAVE_ALL_SEARCH, tasks});
/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export function fetchAllData(info){
  
	return function(dispatch){axios.get(`https://swapi.co/api/planets/?search=${info}`)
    .then((response) => {
      dispatch(saveAllSearch(response.data));
    })
    .catch((err) => {
      console.error.bind(err);
    })
  }
};

/////// end //////
