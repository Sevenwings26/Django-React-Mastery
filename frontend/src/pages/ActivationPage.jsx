import React from 'react'
import { BiUserCheck } from 'react-icons/bi'

const ActivationPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-md p-8 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8 flex justify-between">
          Activation <BiUserCheck/>
        </h1>

        {/* {isLoading && <Spinner />} */}

        <form className="space-y-6">

          <button
            className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-white-600 focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Account
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ActivationPage