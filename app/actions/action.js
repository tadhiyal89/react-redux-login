import axios from "axios";
import {GET_ALL_TASKS,GET_ALL_SEARCH} from '../constant/constant'
const getAllSearch = (tasks) => ({type: GET_ALL_SEARCH, tasks});
/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export const getAllTasks = (info) => dispatch => {
	axios.get(`https://swapi.co/api/planets/?search=${info}`)
    .then((response) => {
      return response.data;
    })
    .then((result) => {
      dispatch(getAllSearch(result))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

/////// end //////
