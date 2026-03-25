// src/features/hostel/hostelSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedHostelId: null,
}

const hostelSlice = createSlice({
  name: "hostel",
  initialState,
  reducers: {
    setSelectedHostel: (state, action) => {
      state.selectedHostelId = action.payload
    },
  },
})

export const { setSelectedHostel } = hostelSlice.actions
export default hostelSlice.reducer