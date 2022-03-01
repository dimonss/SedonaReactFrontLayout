import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import config from "../config";
import {loadState, saveState} from "../utils/localStoreUtils";

const persistedState = loadState();

const store = config.isProduction()
    ? createStore(rootReducer, persistedState, applyMiddleware(thunk))
    : createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
