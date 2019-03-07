module.exports = (conditions) => `import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, enhancer);

export default store;
`