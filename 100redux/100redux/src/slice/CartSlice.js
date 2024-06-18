import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   id: nanoid(),
    //   name: "Handbag",
    //   url: "https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?v=1697534229",
    //   desc: "An elegant beige purse for women",
    //   price: 2000,
    //   quantity: 0,
    // },
    // product id, product name, price
  ],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.cart.find((cartItem) => cartItem.id === action.payload.id) ||
        action.payload.quantity === 0
      ) {
      } else {
        const cartItem = {
          id: action.payload.id,
          name: action.payload.name,
          url: action.payload.url,
          desc: action.payload.desc,
          price: action.payload.price,
          quantity: action.payload.quantity,
        };

        console.log(cartItem);
        state.cart.push(cartItem);
      }
    },
    removeFromCart: (state, action) => {

        console.log("remove from cart is here")
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id != action.payload.id
      );
    },
    plusItem: (state, action) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      console.log(item);
      if (item) {
        item.quantity += 1;
        // So, when you do item.quantity += 1;, you're actually telling Immer to create a new state where the quantity of the specific item is one more than before. This new state then replaces the old state.
      }
    },
    minusItem: (state, action) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        if (item.quantity === 1) {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.id != action.payload.id
          );
        } else {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, plusItem, minusItem } =
  CartSlice.actions;
export default CartSlice.reducer;
