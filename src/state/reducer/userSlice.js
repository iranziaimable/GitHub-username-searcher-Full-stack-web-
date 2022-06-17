import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "history",
    initialState: {
      users: [],
      
    },

    reducers: {
        historyFetch: (state, action) => {
          state.users.push(action.payload)
        },
    },
});
export const searchedUsers =(state) => state.history.users
export const {historyFetch} = slice.actions
export default slice.reducer


