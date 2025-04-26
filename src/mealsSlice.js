// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      img: "https://pixabay.com/images/download/lunch-1638188_640.jpg",
      name: "Standard Meal",
      cost: 20,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/salad-2068220_640.jpg",
      name: "Vegetarian Meal",
      cost: 18,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/breakfast-1804436_640.jpg",
      name: "Breakfast Meal",
      cost: 15,
      quantity: 0,
    },
  ],
  reducers: {
    incrementMealQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementMealQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementMealQuantity, decrementMealQuantity } = mealsSlice.actions;

export default mealsSlice.reducer;
