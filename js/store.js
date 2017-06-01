// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducers';

// Usually not too much to store
// This compose section is grabbed from redux website
const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
			? window.devToolsExtension()
			: f => f
	)
);

export default store;
