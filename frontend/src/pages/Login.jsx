import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const Login = () => {
  const [formData, setFormData ] = useState({
    "email":"",
    "password":"",
})

const {email, password} = formData

const handleChange = (e) => {
  setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
  })
  )
}

const handleSubmit = (e) => {
e.preventDefault()

  toast.success("Welcome to Arcade Dynasty!")
}


return (
<>
<div className="flex items-center justify-center min-h-screen">
  <div className="container mx-auto max-w-md p-8 bg-black rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-white text-center mb-8 flex justify-between">
      Login <BiUser/>
    </h1>

    {/* {isLoading && <Spinner />} */}

    <form className="space-y-6">
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
      <button
        className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-white-600 focus:outline-none"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>
        <div className="flex justify-center px-4 py-2">
        <Link to="/reset_password" className='text-white'>Get New Password 🗝 </Link>      
      </div>
    </form>
  </div>
</div>
</>
)
}

export default Login