import {configureStore} from "@reduxjs/toolkit";
import actionsReducer from "./actionsSlice";

export const store = configureStore({
    reducer: {
        actions: actionsReducer
    }
})