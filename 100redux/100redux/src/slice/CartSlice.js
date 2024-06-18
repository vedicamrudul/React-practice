import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    cart: [
    {
        id: nanoid(),
        name: 'Handbag',
        url: 'https://accessorizelondon.in/cdn/shop/files/MA-28187004001_1_8a091db7-0510-47d6-8eff-f95c927c4dd6.webp?v=1697534229',
        desc: "An elegant beige purse for women",
        price: 2000,
        quantity: 0
    }
    // product id, product name, price
    ]
}

const CartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const cartItem={
                prodId: action.payload.prodId,
                prodName: action.payload.prodName,
                prodDesc: action.payload.prodDesc,
                prodPrice: action.payload.prodPrice
            }
            state.cart.push(cartItem);
        },
        removeFromCart: (state, action)=>{
            state.cart=cart.filter((cartItem)=> cartItem.prodId!= action.payload.prodId);
        },
        plusItem: (state,action)=>{
          
            const item = state.cart.find((cartItem) => cartItem.prodId === action.payload.prodId);
           console.log(item)
            if (item) {
                item.quantity += 1;
                // So, when you do item.quantity += 1;, you're actually telling Immer to create a new state where the quantity of the specific item is one more than before. This new state then replaces the old state.
            }
            
        },
        minusItem: (state, action)=>{
            const item = state.cart.find((cartItem) => cartItem.prodId === action.payload.prodId);
            
            if (item) {
                if(item.quantity!=0){
                    item.quantity-=1;
                }
            
            }
        }
    }
})


export const {addToCart, removeFromCart, plusItem,minusItem}=CartSlice.actions;
export default CartSlice.reducer