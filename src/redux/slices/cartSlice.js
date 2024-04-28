import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem:(state,action)=>{
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },}
});

export const getItemsSelector = createSelector(
  (state) => state.cart,
  (state) => state
);

export const { addItem,deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
