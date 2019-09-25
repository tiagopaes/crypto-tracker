import axios from 'axios';
import { apiBaseUrl } from './../Utils/Contants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`)
      .then(response => {
        return dispatch({
          type: FETCHING_COIN_DATA_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        return dispatch({
          type: FETCHING_COIN_DATA_FAIL,
          payload: error
        })
      })
  }
}
