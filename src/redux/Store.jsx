import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import  storage  from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";

const persistConfig={
    key:"ecommerce-key",
    storage,
}
const persistedReducer=persistReducer(persistConfig,cartReducer);
// const rootReducer=combineReducers({
//     user:authReducer
// });
export const store=configureStore({
    // reducer:rootReducer
    reducer:persistedReducer
});
export const persistor=persistStore(store);