// features/locations/slice/locationSlice.js

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedLocation: null,
}

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload
    },
  },
})

export const { setSelectedLocation } = locationSlice.actions
export default locationSlice.reducer