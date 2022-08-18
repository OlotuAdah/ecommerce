/////////////////store without redux persist/////////////
// import { legacy_createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./rootReducer";

// const middlewares = [logger];
// const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));
// export default store;
////////////////////////////////////////////////////////

import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer from "./rootReducer";
const middlewares = [logger];

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = legacy_createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

export { persistor, store };
