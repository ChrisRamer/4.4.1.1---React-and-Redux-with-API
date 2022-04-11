import * as c from '../actions/ActionTypes';

let initialState = {
	isLoading: true,
	cards: [],
	error: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case c.REQUEST_BLACK_CARD:
			return Object.assign({}, state, {
				isLoading: true
			});
		case c.GET_BLACK_CARD_SUCCESS:
			return Object.assign({}, state, {
				isLoading: false,
				cards: action.cards
			});
		case c.GET_BLACK_CARD_FAILURE:
			return Object.assign({}, state, {
				isLoading: false,
				error: action.error
			});
		case c.REQUEST_WHITE_CARDS:
			return Object.assign({}, state, {
				isLoading: true
			});
		case c.GET_WHITE_CARDS_SUCCESS:
			return Object.assign({}, state, {
				isLoading: false,
				cards: action.cards
			});
		case c.GET_WHITE_CARDS_FAILURE:
			return Object.assign({}, state, {
				isLoading: false,
				error: action.error
			});
		default:
			return state;
	}
}