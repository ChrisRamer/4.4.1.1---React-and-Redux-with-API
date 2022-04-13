import  * as c from './ActionTypes';

const url ='https://cards-against-humanity.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'cards-against-humanity.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
	}
}

export const requestBlackCard = () => ({
	type: c.REQUEST_BLACK_CARD
});

export const getBlackCardSuccess = (card) => ({
	type: c.GET_BLACK_CARD_SUCCESS,
	card
});

export const getBlackCardFailure = (error) => ({
	type: c.GET_BLACK_CARD_FAILURE,
	error
});

export const requestWhiteCards = () => ({
	type: c.REQUEST_WHITE_CARDS
});

export const getWhiteCardsSuccess = (cards) => ({
	type: c.GET_WHITE_CARDS_SUCCESS,
	cards
});

export const getWhiteCardsFailure = (error) => ({
	type: c.GET_WHITE_CARDS_FAILURE,
	error
});

export const getBlackCard = () => {
	return async dispatch => {
		dispatch(requestBlackCard);
		try {
			const response = await fetch(`${url}/black`, options);
			const jsonifiedResponse = await response.json();
			dispatch(getBlackCardSuccess(jsonifiedResponse));
		} catch (error) {
			dispatch(getBlackCardFailure(error));
		}
	}
}

export const getWhiteCards = (count) => {
	return async dispatch => {
		dispatch(requestWhiteCards);
		try {
			const response = await fetch(`${url}/white/${count}`, options);
			const jsonifiedResponse = await response.json();
			dispatch(getWhiteCardsSuccess(jsonifiedResponse));
		} catch (error) {
			dispatch(getWhiteCardsFailure(error));
		}
	}
}