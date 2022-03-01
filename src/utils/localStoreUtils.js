export const loadState = () => {
	try {
		const serializedStore = localStorage.getItem("store");
		if (serializedStore === null) {
			return {};
		}
		return JSON.parse(serializedStore);
	} catch (err) {
		return {};
	}
};

export const saveState = (store) => {
	try {
		const serializedStore = JSON.stringify(store);
		localStorage.setItem("sedona_store", serializedStore);
	} catch (err) {
		new Error(err);
	}
};
