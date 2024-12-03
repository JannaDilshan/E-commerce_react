import { createSlice } from '@reduxjs/toolkit';

// Load cart items from localStorage, or default to an empty array
const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Add the item to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
        // Save updated cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
