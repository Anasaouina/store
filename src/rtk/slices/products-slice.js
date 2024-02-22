import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts= createAsyncThunk("productsSlice/fetchProducts", 
            async () => {
                try {
                const res = await fetch('/data.json');
                const data = await res.json();
                return data;
                } catch (error) {
                console.error('Error fetching data', error);
                throw error;
                }
            }
)
const productsSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            return action.payload;
        })
    }

})
export const {}= productsSlice.actions;
export default productsSlice.reducer;