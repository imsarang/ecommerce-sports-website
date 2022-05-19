import { configureStore } from "@reduxjs/toolkit";
import clickingReducer from "./components/redux/clickingReducer";

const store = configureStore({
    reducer:{
        click:clickingReducer
    }
})

export default store