import { createStore } from 'redux';
import reducer from './reducers';

// Usually not too much to store
const store = createStore(reducer);

export default store;
