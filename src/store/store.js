import { configureStore } from "@reduxjs/toolkit";
import rtkLogger from "./rtkLogger.js";
import { authApi } from "../services/authServices.js";
import authSliceReducer from '../features/authSlice.js'

const Store=configureStore({
    reducer:{
        auth:authSliceReducer,
        [authApi.reducerPath]:authApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(
        authApi.middleware,
        rtkLogger
    ),
     devTools:import.meta.env.REACT_APP_ENV !== 'production', // ✅ enables Redux DevTools
})
export default Store