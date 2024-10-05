import React from 'react'
import homeImg from '../assets/Images/7.jpg'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center BG">
      <div className="signupBG flex shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        
        {/* Left Side (Form) */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center my-7 ">Sign Up</h2>
          <form className="flex flex-col space-y-4 mt-6">
            <input 
              type="text" 
              placeholder="Username" 
              id='username'
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              id='email'
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              id='password'
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <div className="flex flex-col space-y-3">
              <button className="bg-[#3C5ECF] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 uppercase">Sign Up</button>
              <button className="bg-[#D9513F] text-white py-3 rounded-lg hover:bg-red-600 transition duration-300">Continue with Google</button>
            </div>
            <div className='flex gap-2 mt-5 text-lg font-semibold'>
             <p>Have an account ?</p>
             <Link to={"/sign-in"}>
             <span className='text-blue-500'>Sign In</span>
             </Link>
            </div>
          </form>
        </div>
        
        {/* Right Side (Image) */}
        <div className="w-1/2">
          <img 
            src={homeImg} 
            alt="Sign Up" 
            className="object-cover w-full h-full" 
          />
        </div>
        
      </div>
    </div>
  )
}

export default SignUp
