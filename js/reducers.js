// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// OLD:
// This is also a reducer. Reducer is anything that takes a state and action and returns state
// IMPORTANT: don't modify original state. Must create a new state object with assign
// const searchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

const searchTerm = (state = '', action: Action) => {
	if (action.type === SET_SEARCH_TERM) {
		return action.payload;
	}
	return state;
};

const apiData = (state = {}, action: Action) => {
	if (action.type === ADD_API_DATA) {
		return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
	}
	return state;
};

// combineReducers sets root reducer to certain state (I think?)
const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
