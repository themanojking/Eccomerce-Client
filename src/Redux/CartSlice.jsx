import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }

      state.totalQty += 1;
      state.totalPrice += item.price;
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.qty += 1;
        state.totalQty += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if(!item) return;

      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalQty -= 1;
        state.totalPrice -= item.price;
      } else if(item.qty === 1) {
        state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        state.totalQty -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state,action) => {
        const itemId = action.payload;
        const item = state.cartItems.find(i => i.id === itemId);

        if(item) {
            state.totalQty -= item.qty;
            state.totalPrice -= item.qty * item.price;
        }

        state.cartItems = state.cartItems.filter(i => i.id !== itemId);
    }
  },
});

export const { addToCart, increaseQty, decreaseQty,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
