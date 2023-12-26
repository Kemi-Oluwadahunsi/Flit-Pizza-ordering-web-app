"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import axios from 'axios'

const Login = () => {

    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
      
      try{
            router.push("/adminManagePage");
      }catch (err){
        setError(true)
      }
    };



  return (
    <div className="flex align-middle justify-center h-screen pageMargin ">
      <div className="flex flex-col justify-start pt-32 lg:pt-16 align-middle">
        <h1 className="font-semibold text-3xl pb-4 text-center">Admin Dashboard</h1>
        <input
          placeholder="username"
          type="text"
          className=" border-2 border-gray-500 h-12 text-md bg-blue-100 w-80 rounded pl-4"
        ></input>

        <input
          placeholder="password"
          type="password"
          className="border-2 border-gray-500 h-12 text-md mt-5 bg-blue-100 rounded pl-4"
        ></input>
        <button onClick={handleClick} className="mt-5 bg-teal-600 text-white text-md py-2 cursor-pointer">
          Sign In
        </button>
        {error && <span className= "text-sm text-red-600 text-center">Wrong Credentials!</span>}
      </div>
    </div>
  );
}

export default Login