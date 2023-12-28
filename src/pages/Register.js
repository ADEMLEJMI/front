import React from 'react'
import { useForm } from 'react-hook-form';
import{useDispatch} from 'react-redux'
import { RegisterUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Register = () => {
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
    dispatch(RegisterUser(data))
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {required: true})} />
      <input type="email" placeholder="email" {...register("email", {required: true})} />
      <input type="password" placeholder="pasword" {...register("pasword")} />

      <input type="submit" />
    </form>
  );
}

export default Register