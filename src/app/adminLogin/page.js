"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = () => {

    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = async (event) => {
      event.preventDefault(); // Prevent default form submission

      try {
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        const response = await axios.post(
          "https://pizza-ordering-anno.onrender.com/api/login",
          {
            username: usernameInput,
            password: passwordInput,
          }
        );

        console.log(response.data);
        router.push("/adminManagePage");
        toast.success("Login successful!");
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          const status = error.response.status;
          if (status === 404) {
            toast.error(
              "Wrong Credentials"
            );
          } else if (status === 401) {
            toast.error("Wrong password");
          } else {
            console.error("Server Error:", error);
            toast.error(
              "An unexpected error occurred. Please try again later."
            );
          }
        } else {
          console.error("Network Error:", error);
          toast.error(
            "A network error occurred. Please check your internet connection."
          );
        }
      }
    };



  return (
    <div className="flex align-middle justify-center h-screen pageMargin max-w-[1600px] mx-auto">
      <div className="flex flex-col justify-start pt-32 lg:pt-16 align-middle">
        <h1 className="font-semibold text-3xl pb-4 text-center">
          Admin Dashboard
        </h1>
        <input
          placeholder="username"
          id="username"
          type="text"
          className=" border-2 border-gray-500 h-12 text-md bg-blue-100 w-80 rounded pl-4"
        ></input>

        <input
          placeholder="password"
          type="password"
          id="password"
          className="border-2 border-gray-500 h-12 text-md mt-5 bg-blue-100 rounded pl-4"
        ></input>
        <button
          onClick={handleLogin}
          className="mt-5 bg-teal-600 text-white text-md py-2 cursor-pointer"
        >
          Sign In
        </button>
      </div>
      <div className="z-[10000] pt-[20em]">
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
}

export default Login
