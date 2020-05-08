import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import fuelSavings from './fuelSavingsReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
});

export default rootReducer;
