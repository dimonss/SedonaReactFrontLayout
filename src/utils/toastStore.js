import store from "../store/store";
import { showToast } from "../store/actions/uiActions";

export const status = {
	SUCCESS: "success",
	INFO: "info",
	WARNING: "warning",
	ERROR: "error",
};

export const toastStore = (type, message, time) => {
	store.dispatch(showToast({ type, message }));
	setTimeout(() => {
		store.dispatch(showToast(null));
	}, time);
};
