import { GET_SET_TO } from '../actions/types';


export const get_Set_To = data => {
  return {
    type: GET_SET_TO,
    payload: data
  };
};