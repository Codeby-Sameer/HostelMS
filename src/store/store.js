import { configureStore } from "@reduxjs/toolkit";
import rtkLogger from "./rtkLogger.js";
import allocationReducer from '@/features/global/store/allocationSlice.js'

import authSliceReducer from '@/features/auth/slice/authSlice.js'
import { appApi } from "@/services/api/appApi.js";

const Store = configureStore({
    reducer: {
        auth: authSliceReducer,
        allocation:allocationReducer,
        [appApi.reducerPath]: appApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        appApi.middleware,
        rtkLogger
    ),
    devTools: import.meta.env.REACT_APP_ENV !== 'production', // ✅ enables Redux DevTools
})
export default Store