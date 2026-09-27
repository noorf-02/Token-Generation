import React from 'react'
import { Link } from 'react-router-dom'

function SignupCOMP() {
  return (
     <>
    <div className='flex flex-col items-center h-screen justify-center'>
      <h1 className='text-3xl font-bold text-indigo-900'>Sign Up Here!</h1>
      <div className="input-fields my-10 flex flex-col gap-5">

        <div className="full-name flex flex-col gap-2">
          <p className='text-[18px]'>Enter Full Name</p>
          <input type="text" placeholder='eg; Daniel James' className='focus:outline-none border border-1 border-gray-200 py-3 px-5 sm:w-[400px] w-[320px] shadow-md rounded-lg' />
        </div>

        <div className="email flex flex-col gap-2">
          <p className='text-[18px]'>Enter Email</p>
          <input type="text" placeholder='eg; daniel@outlook.comr' className='focus:outline-none border border-1 border-gray-200 py-3 px-5 sm:w-[400px] w-[320px] shadow-md rounded-lg' />
        </div>

        <div className="username flex flex-col gap-2">
          <p className='text-[18px]'>Enter Username</p>
          <input type="text" placeholder='eg; daniel_user' className='focus:outline-none border border-1 border-gray-200 py-3 px-5 sm:w-[400px] w-[320px] shadow-md rounded-lg' />
        </div>

        <div className="password flex flex-col gap-2">
          <p className='text-[18px]'>Enter Password</p>
          <input type="password" placeholder='abcABC@123' className='focus:outline-none border border-1 border-gray-200 py-3 px-5 sm:w-[400px] w-[320px] shadow-md rounded-lg' />
        </div>

        <button className='bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-1 rounded-lg'>Sign Up</button>

        <p>Already have an account? <Link to='/' className='underline italic text-indigo-900'>Log In Here</Link></p>
      </div>
    </div>
    </> 
  )
}

export default SignupCOMP
