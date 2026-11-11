import {createSlice} from '@reduxjs/toolkit'
import { foods } from '../data/food'

const initialState = {
    items: foods,
    selectedCategory: "All",
    searchText: "",
    sortBy: "default",
    vegOnly: false
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        setsortBy: (state, action) => {
            state.sortBy = action.payload
        },
        toggleVegOnly: (state) => {
            state.vegOnly = !state.vegOnly
        },
        resetFilters: (state) => {
            state.selectedCategory = "All"
            state.searchText = ""
            state.sortBy = "default"
            state.vegOnly = false
        }
    }
})

export const {setCategory, setSearchText, setsortBy, toggleVegOnly, resetFilters} = foodSlice.actions

export const selectAllFoods = (state) => state.food.items
export const selectSelectedCategory = (state) => state.food.selectedCategory
export const selectSearchText = (state) => state.food.searchText
export const selectSortBy = (state) => state.food.sortBy
export const selectVegOnly = (state) => state.food.vegOnly

export const selectFoodById = (id) => (state) => state.food.items.find(food => food.id === id)

export default foodSlice.reducer
