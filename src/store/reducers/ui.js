import * as ActionTypes from "../actions/actionTypes";

const initialState = {
	modalWindowIsOpen: false,
	toast: null,
};

export default function ui(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_MODAL_WINDOW_OPEN:
			return {
				...state,
				modalWindowIsOpen: action.status,
			};
		case ActionTypes.SET_TOAST_STORE:
			return {
				...state,
				toast: action.data,
			};
		default:
			return state;
	}
}
