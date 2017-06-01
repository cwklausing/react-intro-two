import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
	searchTerm: ''
};

// This is also a reducer. Reducer is anything that takes a state and action and returns state
// IMPORTANT: don't modify original state. Must create a new state object with assign
const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

// Root reducer takes in state and action, and returns another state
// MUST be same output with same input every time (e.g. no counters)
const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		// If root reducer gets called with an unknown action, just return state as is
		default:
			return state;
	}
};

export default rootReducer;
