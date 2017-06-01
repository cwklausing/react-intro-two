// @flow
// Check out f8 by facebook for a great open source project using flow

export type Show = {
	title: string,
	description: string,
	year: string,
	imdbID: string,
	trailer: string,
	poster: string,
	rating?: string
};

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

// Angle brackets are a flow syntax thing
declare type ActionT<A: ActionType, P> = {|
	type: A,
	payload: P
|};

export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
