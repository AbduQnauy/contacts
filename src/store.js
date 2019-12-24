import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import contactsReducer from "./reducers/contactsReducer";
import checkAllReducer from "./reducers/checkAllReducer";
import paginationReducer from "./reducers/paginationReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  form: formReducer,
  contacts: contactsReducer,
  flag: checkAllReducer,
  pagination: paginationReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["form", "contacts", "flag", "pagination"]
  // whitelist: ["fosrm"]
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
