import { loadState } from "./storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: loadState("food_cart", [])
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id)
            if(existingItem){
                existingItem.quantity += 1;
            }
            else {
                state.items.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    isVeg: item.isVeg,
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }   
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;