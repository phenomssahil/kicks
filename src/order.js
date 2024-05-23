import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Done from './done'
const Order = () => {
    const [show,Setshow]=useState(false)
    const [mail,Setmail]=useState(true)
    const [done,Setdone]=useState(false)
    const[data,Setdata]=useState([])
    const [input,setinput]=useState({
        email:"",
        name:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        country:"",
        cardNumber:"",
        NameCard:"",
        expM:"",
        expY:"",
        cvv:"",
        CardType:""

    })
    const showClose=()=>{
        Setshow(false)
    }
    const cancel=()=>{
        Setmail(false)
    }
    const Mail=()=>{
        return(
            <div>  
            <input type='email' name='email' required value={input.email} className='inpt relative top-[36px] left-80 w-72 bg-gray-100 z-10'onChange={getData}>
            </input>
            <button className='btn4 relative top-[36px] w-8 h-8 left-96 z-20 center bg-gray-400 rounded-lg items-center'onClick={()=>{cancel()}}></button>
            </div>
        )
    }
    const Received=()=>{
        return(
            <>
            <Done/>
            </>
        )
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name,email,address,city,state,zip,country,cardNumber,NameCard,expM,expY,cvv,CardType}=input;
        if(name === ""){
            alert('name field is required')
        }else if(email ===""){
            alert('email field is required')
        }else if(address ===""){
            alert('address field is required')
        }else if(city ===""){
            alert('city field is required')
        }else if(state ===""){
            alert('state field is required')
        }else if(zip ===""){
            alert('zip field is required')
        }else if(cardNumber ===""){
            alert('cardNumber field is required')
        }else if(cvv ===""){
            alert('cvv field is required')
        }else if(expM ===""){
            alert('expM field is required')
        }else if(expY ===""){
            alert('expY field is required')
        }else if(NameCard ===""){
            alert('Card name field is required')
        }else if(CardType ===""){
            alert('Card type field is required')
        }
        console.log('data added successfully')
        localStorage.setItem('Address',JSON.stringify([...data,input]));  
      }
      const Alert=()=>{
        const {name,email,address,city,state,zip,cardNumber,NameCard,expM,expY,cvv,CardType}=input;
        if(name === ""){
            alert('name field is required')
        }else if(email ===""){
            alert('email field is required')
        }else if(address ===""){
            alert('address field is required')
        }else if(city ===""){
            alert('city field is required')
        }else if(state ===""){
            alert('state field is required')
        }else if(zip ===""){
            alert('zip field is required')
        }else if(cardNumber ===""){
            alert('cardNumber field is required')
        }else if(cvv ===""){
            alert('cvv field is required')
        }else if(expM ===""){
            alert('expM field is required')
        }else if(expY ===""){
            alert('expY field is required')
        }else if(NameCard ===""){
            alert('Card name field is required')
        }else if(CardType ===""){
            alert('Card type field is required')
        }else{
          Setdone(true);
        }
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
      const id=()=>{
        const{email}=input;
        return (
            <>
            <h5>{email}</h5>
            </>
        )
      }
      const card=()=>{
        const{CardType,NameCard,expM,expY}=input;
        return (
            <>
            <h5>{CardType}</h5>
            <h5>{NameCard}</h5>
            <h5>{expM} {expY}</h5>
            </>
        )
      }
      const getData=(e)=>{
        const {name,value}=e.target;
        setinput({
            ...input,
            [name]:value
        })
       console.log(input)
    }
   const Address=()=>{ 
  return (
    <div className='relative left-[600px] h-[500px] '>
      <div className='w-1/2 top-28'>
        <div class="form1 bg-white mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
  <h2 class="text-black font-bold text-lg">Shipping Address Form</h2>
<form>
  <div class="mt-4">
    <label class="text-black" htmlFor="name">Name</label>
    <input name="name" placeholder="Your name" required class="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" type="text" value={input.name} onChange={getData}></input>
  </div>
  <div class="mt-4">
    <label class="text-black"  htmlFor="address">Address</label>
    <input name='address'  value={input.address} placeholder="Your address" required class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="address"onChange={getData}></input>
  </div>
  <div class="mt-4 flex flex-row space-x-2">
    <div class="flex-1">
      <label class="text-black"  htmlFor="city">City</label>
      <input name='city'  value={input.city} placeholder="Your city" required class="w-full bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="city" type="text"onChange={getData}></input>
    </div>
    <div class="flex-1">
      <label class="text-black"  htmlFor="state">State</label>
      <input name='state' value={input.state} placeholder="Your state" required class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="state" type="text"onChange={getData}></input>
    </div>
  </div>
  <div class="mt-4 flex flex-row space-x-2">
    <div class="flex-1">
      <label class="text-black"  htmlFor="zip">ZIP</label>
      <input name='zip' value={input.zip} placeholder="Your ZIP code"  required class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="zip" type="text" onChange={getData}></input>
    </div>
    <div class="flex-1">
      <label class="text-black"  htmlFor="country">Country</label>
      <select name='country' class="w-full  bg-gray-100 rounded-md border-gray-300 text-black px-2 py-1" id="country" value={input.country} onChange={getData}>
        <option >Select a country</option>
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
  <button class="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit" onClick={()=>{showClose()}} >Ok</button>
    <button class="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" type="submit"onClick={handleSubmit}  >Submit</button>
  </div>
  </form>
</div>
</div>
    </div>
  )
   }
   return(
    <div className=' bg-white h-[900px]'>
    <h1 className='check relative top-24 left-[-555px] font-extrabold text-5xl'>CHECKOUT</h1>
    <div className='cred relative bg-white top-32 left-[830px] w-[600px] h-[800px] z-20 '>
<form class="form">
  <header>
 Card information
  <span class="message">Fill the form to continue.</span>
  </header>
  <label>
    <span>Card Number</span>
    <input placeholder="Type your card number" name='cardNumber' class="input" type="number" required="" onChange={getData}></input>
  </label>
  <label>
    <span>Name on card</span>
    <input placeholder="Type your name as appear on card" name='NameCard' class="input" type="text" required="" onChange={getData}></input>
  </label>
  <fieldset>
  <label class="sm">
    <span>Card type </span>
    <div class="custom-select">
    <select class="input" type="select" name='CardType' required="" onChange={getData}>
      <option></option>
      <option>Debit Card</option>
      <option>Credit Card</option>
    </select>
    </div>
  </label>
    <label class="sm">
    <span>Exp. Month</span>
    <div class="custom-select">
    <select class="input" type="select" name='expM'onChange={getData} required="">
      <option></option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    </select>
    </div>
  </label>
  <label class="sm">
    <span>Exp. Year </span>
    <div class="custom-select">
    <select class="input" type="select" name='expY' required="" onChange={getData}>
      <option></option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
    </select>
    </div>
  </label>
    <label class="sm">
    <span>CVV </span>   
    <input class="input" placeholder="cvv" name='cvv' size="4" maxlength="4" type="password" required="" onChange={getData}></input>
  </label>
  </fieldset>
  <div class="submitCard">
    <button onClick={handleSubmit}>Save</button>
  </div>
</form>
<button className='end w-[570px] h-10 bg-black absolute left-[0px] top-[520px] font-bold text-white align-middle rounded-2xl'onClick={()=>{Alert()}}>{done && <Received/>}Complete Payment</button>
</div>
           <div className='address relative top-[-680px]'>
         <div className='relative left-[-630px] bottom-[-80px]'>
         {mail && <Mail/>}
            <h5 className='text-2xl relative top-0 left-6 font-extrabold '>CUSTOMER ID</h5>  
           <h5 className='id relative left-72 top-[-24px]'>{id()}</h5>
         </div>
         <hr className='hr3 relative top-32 w-1/2'></hr>
        <div className='relative left-[-550px] top-20 '>{show && <Address/>}
        <h5 className='relative top-[100px] text-2xl font-extrabold left-[-20px]' onClick={()=>{Setshow(true)}}>SHIPPING ADDRESS</h5> 
        <h5 className='dta relative left-[300px] top-[70px]'>{addData()}</h5>
        <button className='edit relative left-[550px] top-[70px] border-black content-center rounded-lg w-20 bg-gray-100' onClick={()=>{Setshow(true)}}>Edit <span class="material-symbols-outlined">
edit
</span></button>
        </div>
        <hr className='hr3 relative top-52 w-1/2'></hr>
        <div className='relative left-[-620px] top-40' onClick={()=>{showClose()}}>
       <h5 className='relative top-[95px] left-6 font-extrabold text-2xl'>CARD DETAILS</h5>
       <h5 className='crdta relative left-[350px] top-20'>{card()}</h5>

        </div>
        <hr className='hr3 relative top-72 w-1/2'></hr>
        </div>
    </div>

   )
}

export default Order
