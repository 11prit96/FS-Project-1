import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    cartItems: [],
    error: ''
}

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const response = await axios.get('/api/cart')
    const { data } = await response
    const { cart } = await data
    return cart
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.loading = false,
                state.cartItems = action.payload,
                state.error = ''
        })
        builder.addCase(fetchCartItems.rejected, (state, action) => {
            state.loading = false,
                state.cartItems = [],
                state.error = action.error
        })
    }
})

export const cartReducer = cartSlice.reducer