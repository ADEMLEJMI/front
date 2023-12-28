import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux'
import { LoginUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const{isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(isAuth){
      navigate('/home')
    }
  },[isAuth])
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    dispatch(LoginUser(data))
   
  }
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <input type="email" placeholder="email" {...register("email", {required: true})} />
    <input type="password" placeholder="pasword" {...register("pasword")} />

    <input type="submit" />
  </form>
);
  
}

export default Login