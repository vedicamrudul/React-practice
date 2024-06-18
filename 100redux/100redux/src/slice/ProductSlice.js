import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: nanoid(),
      name: "Handbag",
      url: "https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?v=1697534229",
      desc: "An elegant beige purse for women",
      price: 2000,
      amt: 0,
    },
    {
      id: nanoid(),
      name: "purse",
      url: "https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?v=1697534229",
      desc: "something else",
      price: 3500,
      amt: 0,
    },
    {
      id: nanoid(),
      name: "something more different",
      url: "https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?v=1697534229",
      desc: "something else",
      price: 3200,
      amt: 0,
    },
    
  ],
};

const ProdSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const prodItem = {
        id: nanoid(),
        name: action.name,
        url: action.url,
        desc: action.desc,
        price: action.price,
        amt: 0,
      };
      state.products.push(prodItem);
    },
    removeProduct: (state, action) => {
      state.products = products.filter(
        (prodItem) => prodItem.id != action.payload.id
      );
    },
    plusAmt: (state, action) => {
      // console.log(state
        const item = state.products.filter((prodItem) => { console.log(`this is id of product ${prodItem.id} and this is of payload ${action.payload.id}`); return prodItem.id === action.payload.id})
        item[0].amt += 1;
        
        // So, when you do item.quantity += 1;, you're actually telling Immer to create a new state where the quantity of the specific item is one more than before. This new state then replaces the old state.
      
    },
    minusAmt: (state, action) => {
      const item = state.products.filter((prodItem) => { console.log(`this is id of product ${prodItem.id} and this is of payload ${action.payload.id}`); return prodItem.id === action.payload.id})
     
        if (item[0].amt != 0) {
          item[0].amt -= 1;
        }
      }
    },

});

export const { addProduct, removeProduct, plusAmt, minusAmt } =
  ProdSlice.actions;
export default ProdSlice.reducer;
