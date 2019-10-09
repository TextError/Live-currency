import axios from 'axios';
import { DAY_BEFORE, TWO_DAYS_BEFORE } from './date';
import isEmpty from '../../../components/common/isEmpty/isEmpty';

const HISTORY = `https://api.exchangeratesapi.io/history?`;

export const GET = ({ 
  BASE,
  ENDPOINT,
  ERROR_TYPE,
  SUCCESS_TYPE,
  LOADING,
  LOADED
}) => {
  return async dispatch => {
    const onSuccess = success => {
      dispatch({ type: SUCCESS_TYPE, payload: success });
      dispatch({ type: LOADED, payload: false });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
      dispatch({ type: LOADED, payload: false });
    };
    try {
      dispatch({ type: LOADING, payload: true });
      const response = await axios.get(`${ENDPOINT}&base=${BASE}`);
      const success = response.data;
      // If response is empty
      if(await isEmpty(success.rates)) {
        const response = await axios.get(`${HISTORY}start_at=${DAY_BEFORE}&end_at=${DAY_BEFORE}&base=${BASE}`);
        const payload = response.data;
        const { start_at, base } = payload;
        const rates = Object.values(payload.rates)[0];
        const success = { date: start_at, rates , base }
        // if response is empty
        if(await isEmpty(rates)) {
          const response = await axios.get(`${HISTORY}start_at=${TWO_DAYS_BEFORE}&end_at=${TWO_DAYS_BEFORE}&base=${BASE}`);
          const payload = response.data;
          const { start_at, base } = payload;
          const rates = Object.values(payload.rates)[0];
          const success = { date: start_at, rates , base }
          return onSuccess(success);
        }
        return onSuccess(success);
      }
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}