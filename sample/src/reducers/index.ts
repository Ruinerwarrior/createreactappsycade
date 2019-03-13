import { combineReducers } from 'redux';
import { asyncActionStatusOfreducer } from './asyncActionStatusReducer';
import { asyncActionPayloadOfReducer } from './asyncActionPayloadReducer';
import { asyncActionOfReducer } from './asyncActionReducer';
import { TITLE } from '../constants/actions';

const rootReducer = combineReducers({
  fullTitle: asyncActionOfReducer(TITLE, 'Home')
});

export default rootReducer;
