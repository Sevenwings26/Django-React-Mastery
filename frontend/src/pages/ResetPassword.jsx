import React, { useState } from 'react'

const ResetPassword = () => {
    const [formData, setFormData ] = useState({
        "email":"",
    })

    const {email} = formData

    const handleChange = (e) => {
      setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
      })
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      
    }


  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-md p-8 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8 flex justify-between">
          Reset Password
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
          <button
            className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-white-600 focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
    </>
  )

}

export default ResetPassword