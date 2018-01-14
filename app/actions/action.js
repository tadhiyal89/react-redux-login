import axios from "axios";
import {GET_ALL_TASKS,GET_ALL_SEARCH} from '../constant/constant'
import store from '../store/store'
const getAllSearch = (tasks) => ({type: GET_ALL_SEARCH, tasks});
/////////////// ACTION DISPATCHER FUNCTIONS///////////////////

export const getAllTasks = (info) => (ss) => {
  debugger
	axios.get(`https://swapi.co/api/planets/?search=${ss}`)
    .then((response) => {
      return response.data;
    })
    .then((result) => {
      store.dispatch(getAllSearch(result))
    })
    .catch((err) => {
      console.error.bind(err);
    })
};

/////// end //////
