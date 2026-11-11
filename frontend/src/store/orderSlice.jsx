import { loadState } from "./storage";
import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    orders: loadState("food_orders", [])
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        placeOrder: {
            prepare: ({userId, items, totals, address, paymentMethod}) => ({
                //preparing a payload of orderId and other details to pass to the reducer to add to placeOrder 
                payload: {
                    id: nanoid(8).toUpperCase(),
                    userId,
                    items,
                    totals,
                    address,
                    paymentMethod,
                    status: "placed",
                    createdAt: new Date().toISOString
                },
                reducer: (state, action) => {
                    state.orders.unshift(action.payload); //add the payload created above to appear at the top of the orders list
                }
            })
        },
        updateOrderStatus: (state, action) => {
            const {orderId, status} = action.payload;
            const order = state.orders.find(order => order.id === orderId)
            if(order){
                order.status = status;
            }
        }
    }
})

export const {placeOrder, updateOrderStatus} = orderSlice.actions;
export const selectAllOrders = (state) => state.order.orders;

export default orderSlice.reducer