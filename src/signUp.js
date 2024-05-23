import React from 'react'
import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
const SignUp = (props) => {
    const[data,setdata]=useState([])
  const[input,setinput]=useState({
    name:"",
    email:"",
    password:""
  })
    const getdata=(e)=>{
        const { name , value}=e.target;
        // console.log(value,name);
        setinput({
            ...input,
            [name]:value
        })
       console.log(input)
       }
       const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here
        console.log(input);
        console.log(e.target.name.value)
        console.log('data added successfully')
        localStorage.setItem('userKicks',JSON.stringify([...data,input]));
      }
  return (
    <div className='w-full h-full fixed left-0 top-0  bg-black bg-opacity-80' >
        <div className='signup bg-white w-[500px] h-min relative left-[500px] top-48'>
       <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            onDoubleClick={()=>{props.cancel()}}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
                <input
                 onChange={getdata}
                  id="name"
                  name="name"
                  type="text"
                  value={input.name}
                  autoComplete="name"
                  reguired
                  placeholder="Enter Full Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                onChange={getdata}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter email'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                 onChange={getdata}
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter Password'
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
               onClick={handleSubmit} onClickCapture={()=>{props.cancel()}}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Already Have an account <span ><NavLink to='/login'>Sign In</NavLink></span>
            </a>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp;
