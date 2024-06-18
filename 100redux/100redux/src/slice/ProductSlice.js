import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: nanoid(),
      name: "Mini Purse",
      url: "https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?v=1697534229",
      desc: "Elegant Beige Mini-purse",
      price: 2000,
      amt: 0,
    },
    {
      id: nanoid(),
      name: "ColorSplash Bag",
      desc: "A blend of pastel shades in a bag",
      url: "https://img.fruugo.com/product/4/97/1437743974_max.jpg",
      price: 3500,
      amt: 0,
    },
    {
      id: nanoid(),
      name: "Mini-sling",
      desc: "A small y2k styled, handy sling bag",
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdjahM5IqaEpeNOh0eElHAZjMSnEw19tcuwFFj88Cwom3THJf7EvwkfZxK61Vy_y1si2FwLhMfBphHVcce6r-CLDsvzHLzHEFrcqtqkvISB9C6eD7Ccp9a&usqp=CAE",
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
        const item = state.products.filter((prodItem) => { return prodItem.id === action.payload.id})
        item[0].amt += 1;
        
        // So, when you do item.quantity += 1;, you're actually telling Immer to create a new state where the quantity of the specific item is one more than before. This new state then replaces the old state.
      
    },
    minusAmt: (state, action) => {
      const item = state.products.filter((prodItem) => { return prodItem.id === action.payload.id})
     
        if (item[0].amt != 0) {
          item[0].amt -= 1;
        }
      }
    },

});

export const { addProduct, removeProduct, plusAmt, minusAmt } =
  ProdSlice.actions;
export default ProdSlice.reducer;
