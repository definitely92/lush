import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertItem(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      if (num === -1) {
        state.push(action.payload);
      } else {
        state[num].count += action.payload.count;
      }
    },
    deleteItem(state, action) {
      return state.filter((obj) => obj.id !== action.payload.id);
    },
    addCount(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state[num].count++;
    },
    decreaseCount(state, action) {
      let num = state.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state[num].count--;
    },
  },
});
export let { insertItem, addCount, decreaseCount, deleteItem } = cart.actions;

export default cart;
