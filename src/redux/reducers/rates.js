import { RATES } from '../actions/types';

const initialState = {
  data: {
    rates: {},
    from_base: 'GBP',
    start_at: '',
    end_at: '',
    isLoading: false
  },
  data_two: {
    lastYear: {},
    year_at: '',
    isLoading: false,
  },
  keys: ['EUR', 'RON', 'RUB', 'USD'],
  error: {}
};

const rates = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case RATES.UPDATE:
      return {
        ...state,
        data: {
          ...state.data,
          rates: payload.rates,
          from_base: payload.base,
          start_at: payload.start_at,
          end_at: payload.end_at
        }
      }
    case RATES.UPDATE_LAST_YEAR:
      return {
        ...state,
        data_two: {
          ...state.data_two,
          lastYear: payload.rates,
          year_at: payload.start_at
        }
      }
    case RATES.FROM_RATES:
      return {
        ...state,
        data: {
          ...state.data,
          from_base: payload
        }
      }
    case RATES.ADD_RATE:
      return {
        ...state,
        keys: [...state.keys, payload]
      }
    case RATES.LOADING_RATES:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: payload
        }
      }
    case RATES.LOADED_RATES:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: payload
        }
      }
    case RATES.LOADING_LAST_YEAR: {
      return {
        ...state,
        data_two: {
          ...state.data_two,
          isLoading: payload
        }
      }
    }
    case RATES.LOADED_LAST_YEAR : {
      return {
        ...state,
        data_two: {
          ...state.data_two,
          isLoading: payload
        }
      }
    }
    case RATES.ERROR:
        return {
          ...state,
          error: payload
        }
    default:
      return state;
  }
};

export default rates;