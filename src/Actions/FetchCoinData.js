import axios from 'axios';
import {apiBaseUrl, apiSecretKey} from './../Utils/Contants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from './../Utils/ActionTypes';

export default function FetchCoinData() {
  return async dispatch => {
    dispatch({type: FETCHING_COIN_DATA});

    try {
      const response = await axios.get(
        `${apiBaseUrl}/cryptocurrency/map?limit=10&sort=cmc_rank&aux=`,
        {
          headers: {
            'X-CMC_PRO_API_KEY': apiSecretKey,
          },
        },
      );

      const ids = response.data.data.map(item => item.id).toString();
      const _response = await axios.get(
        `${apiBaseUrl}/cryptocurrency/quotes/latest?id=${ids}`,
        {
          headers: {
            'X-CMC_PRO_API_KEY': apiSecretKey,
          },
        },
      );

      return dispatch({
        type: FETCHING_COIN_DATA_SUCCESS,
        payload: Object.values(_response.data.data),
      });
    } catch (error) {
      return dispatch({
        type: FETCHING_COIN_DATA_FAIL,
        payload: error,
      });
    }
  };
}
