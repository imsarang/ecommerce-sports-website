import { configureStore } from "@reduxjs/toolkit";
import clickingReducer from "./components/redux/clickingReducer";
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import productReducer from "./components/redux/productReducer";
import cartReducer from "./components/redux/cartReducer";
import userReducer from "./components/redux/userReducer";

const persistConfig1 = {
    key : "Category",
    storage
}

const persistConfig2 = {
    key:'Product',storage
}

const persistConfig3={
    key:'Cart',storage
}

const persistConfig4={
    key:'User',storage
}
const persistedClick = persistReducer(persistConfig1,clickingReducer)
const persistProduct = persistReducer(persistConfig2,productReducer)
const persistCart = persistReducer(persistConfig3,cartReducer)
const persistUser = persistReducer(persistConfig4,userReducer)

const store = configureStore({
    reducer:{
        click:persistedClick,
        item:persistProduct,
        cart:persistCart,
        user:persistUser,
    }
})

const persistor = persistStore(store)
export default store
// export {persistor}