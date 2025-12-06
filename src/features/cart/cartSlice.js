import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increateItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increateItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export function getCart(state) {
  return state.cart.cart;
}

export const getQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.id === id)?.quantity;
};

export function getTotalQuantity(state) {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);
}
