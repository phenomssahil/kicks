import React from 'react'
import { useState } from 'react'

const Shipadd = () => {

    const[data,Setdata]=useState([])
    const [input,setinput]=useState({
        name:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        country:""
    })
   
    const getData=(e)=>{
        const {name,value}=e.target;
        setinput({
            ...input,
            [name]:value
        })
       console.log(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here
        console.log('data added successfully')
        localStorage.setItem('Address',JSON.stringify([...data,input]));  
        {addData()}      
      }
      const addData=()=>{
    
        const{name,address}=input;
        return(
            <>
            <h5>{name}</h5>
            <h5>{address}</h5>
            </>
        )
      }
  return (
    <div className=' relative left-[600px] h-[500px] '>
    <div className='w-1/2 top-28'>
      <div class="bg-white mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
<h2 class="text-black font-bold text-lg">Shipping Address Form</h2>

<div class="mt-4">
  <label class="text-black" htmlFor="name">Name</label>
  <input name="name" placeholder="Your name" class="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" type="text" value={input.name} onChange={getData}></input>
</div>

<div class="mt-4">
  <label class="text-black"  htmlFor="address">Address</label>
  <input name='address'  value={input.address} placeholder="Your address" class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="address"onChange={getData}></input>
</div>

<div class="mt-4 flex flex-row space-x-2">
  <div class="flex-1">
    <label class="text-black"  htmlFor="city">City</label>
    <input name='city'  value={input.city} placeholder="Your city" class="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="city" type="text"onChange={getData}></input>
  </div>

  <div class="flex-1">
    <label class="text-black"  htmlFor="state">State</label>
    <input name='state' value={input.state} placeholder="Your state" class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="state" type="text"onChange={getData}></input>
  </div>
</div>

<div class="mt-4 flex flex-row space-x-2">
  <div class="flex-1">
    <label class="text-black"  htmlFor="zip">ZIP</label>
    <input name='zip' value={input.zip} placeholder="Your ZIP code" class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="text" onChange={getData}></input>
  </div>

  <div class="flex-1">
    <label class="text-black"  htmlFor="country">Country</label>
    <select name='country' class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="country" onChange={getData}>
      <option value={input.country} >Select a country</option>

      <optgroup label="Africa">
        <option value="AF">Afghanistan</option>
        <option value="DZ">Algeria</option>
        <option value="AO">Angola</option>
        ...
        <option value="ZW">Zimbabwe</option>
      </optgroup>

      <optgroup label="Asia">
        <option value="AM">India</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BH">Bahrain</option>
        ...
        <option value="YE">Yemen</option>
      </optgroup>

      <optgroup label="South America">
        <option value="AR">Argentina</option>
        <option value="BO">Bolivia</option>
        <option value="BR">Brazil</option>
        ...
        <option value="VE">Venezuela</option>
      </optgroup>

      ...
    </select>
  </div>
</div>

<div class="mt-4 flex justify-end">
  <button class="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit" onClick={handleSubmit} >Submit</button>
</div>
</div>
</div>
  </div>
  )
}
export default Shipadd

// export  function add(){
//     return (
//         <>
//         {}
//         </>
//     )
// }