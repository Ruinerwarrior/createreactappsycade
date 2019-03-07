import { combineReducers } from 'redux';
import { asyncActionStatusOfreducer } from './asyncActionStatusReducer';
import { asyncActionPayloadOfReducer } from './asyncActionPayloadReducer';
import { asyncActionOfReducer } from './asyncActionReducer';
import { TITLE } from '../constants/actions';

const rootReducer = combineReducers({
  titleStatus: asyncActionStatusOfreducer(TITLE),
  title: asyncActionPayloadOfReducer(TITLE, 'test'),
  fullTitle: asyncActionOfReducer(TITLE, 'test')
});

export default rootReducer;
