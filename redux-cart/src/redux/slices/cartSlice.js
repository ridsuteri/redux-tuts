import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            // you should now add this information received from payload and add it to your state
            // console.log(action.payload);
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter((item)=> item.id !== action.payload.id)
        },
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;