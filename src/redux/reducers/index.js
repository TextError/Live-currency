import { combineReducers } from 'redux';
import get_Errors from './get_Errors';
import get_Select_Rate from './get_Select_Rate';
import get_Base from './get_Base';
import get_Date from './get_Date';
import get_Symbols from './get_Symbols';
import get_New_Symbols from './get_New_Symbols';
import get_New_Rate from './get_New_Rate';
import get_Rate from './get_Rate';
import get_Currency from './get_Currency';

export default combineReducers({
  errors: get_Errors,
  selectRate: get_Select_Rate,
  date: get_Date,
  base: get_Base,
  symbols: get_Symbols,
  newSymbols: get_New_Symbols,
  rate: get_Rate,
  newRate: get_New_Rate,
  currency: get_Currency
});