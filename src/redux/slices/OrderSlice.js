import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateOrder = createAsyncThunk("Post Oders", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.post("http://localhost:8081/api/user/createorder",data,{
    headers:{
        token:localStorage.getItem("token")
    }
 });
  return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});



const OrderSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: null,
    Orders:[]  },
  reducers:{
  
  },
  extraReducers:{
    [CreateOrder.pending]:(state)=>{state.isLoading=true},
    [CreateOrder.fulfilled]:(state,action)=>{
        state.error=null
        state.isLoading=false

    },
    [CreateOrder.rejected]:(state,action)=>{
        state.error=action.payload.error
    },
    
  }
});

export default OrderSlice.reducer;