import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from 'axios';

export const RegisterUser=createAsyncThunk("Register",async(data) => {
    const res= await axios.post("http://localhost:8081/api/register",data)
    return res.data;
  })
const UserSlice=createSlice({
    name:"user",
    initialState:{
        isLoading:false,
        token:localStorage.getItem("token")||null,
        error:false,
        isAuth:Boolean(localStorage.getItem("isAuth"))||false
      
    },
    extraReducers:{
        [RegisterUser.pending]:(state)=>{state.isLoading=true},
        [RegisterUser.fulfilled]:(state,action)=>{
            state.token=action.payload.token
            state.error=false
            state.isAuth=true
        },
        [RegisterUser.rejected]:(state,action)=>{
            state.error=action.payload.error
            state.isAuth=false
        }
    }
})
export default UserSlice.reducer