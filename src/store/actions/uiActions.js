import * as type from "./actionTypes";

export const toggleModalWindow = (isOpen) => ({
	type: type.SET_MODAL_WINDOW_OPEN,
	status: isOpen,
});

export const showToast = (data) => ({
	type: type.SET_TOAST_STORE,
	data,
});
