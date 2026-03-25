import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hostelId: null,
  roomId: null,
  bedId: null,
}

const allocationSlice = createSlice({
  name: "allocation",
  initialState,
  reducers: {
    setHostel(state, action) {
      state.hostelId = action.payload
      state.roomId = null   // reset chain
      state.bedId = null
    },
    setRoom(state, action) {
      state.roomId = action.payload
      state.bedId = null
    },
    setBed(state, action) {
      state.bedId = action.payload
    },
    resetAllocation(state) {
      state.hostelId = null
      state.roomId = null
      state.bedId = null
    },
  },
})

export const {
  setHostel,
  setRoom,
  setBed,
  resetAllocation,
} = allocationSlice.actions

export default allocationSlice.reducer