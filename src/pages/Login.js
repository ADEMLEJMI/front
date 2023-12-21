import React from 'react'
import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux'
const Login = () => {
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
   
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