import React, { useState } from 'react'
import {BiUser} from "react-icons/bi"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../features/auth/authSlice'



const RegisterPage = () => {
    const [formData, setFormData ] = useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
        "re_password":"",
    })

    const {first_name, last_name, email, password, re_password} = formData

    // using redux 
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth)

    const handleChange = (e) => {
      setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
      })
      )
  }


  const handleSubmit = (e) => {

    e.preventDefault()
    
    if (password != re_password){
      toast.error("Passwords do not match!")
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
        re_password,
      }
      dispatch(register(userData))
    }
  }


  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-md p-8 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8 flex justify-between">
          Register <BiUser />
        </h1>

        {/* {isLoading && <Spinner />} */}

        <form className="space-y-6">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
            onChange={handleChange}
            value={first_name}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
            onChange={handleChange}
            value={last_name}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none"
            onChange={handleChange}
            value={re_password}
            required
          />

          <button
            className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-white-600 focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
    </>
  )
}


export default RegisterPage
