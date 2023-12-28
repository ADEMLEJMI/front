import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";





const PanierSlice = createSlice({
  name: "panier",
  initialState: {
    isLoading: false,
    error: null,
    products:[]  },
  reducers:{
    addProductpanier:(state,action)=>{
        state.products=[...state.products,action.payload]
    }
  },
  extraReducers:{
   
    
  }
});

export default PanierSlice.reducer;
export const {addProductpanier}=PanierSlice.actions