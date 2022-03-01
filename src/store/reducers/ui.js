import * as ActionTypes from "../actions/actionTypes";


const initialState = {
    modalWindowIsOpen: false,
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_MODAL_WINDOW_OPEN:
            return {
                ...state,
                modalWindowIsOpen: action.status,
            };
        default:
            return state;
    }
}
