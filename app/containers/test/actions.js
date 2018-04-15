import {INCREMENT,DECREMENT} from '../../constant/constant'

export const increment = function (payload){
	return {type:INCREMENT,data:payload}
}
export const decrement = function (payload){
	return {type:DECREMENT,data:payload}
}

