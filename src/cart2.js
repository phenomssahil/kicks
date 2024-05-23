import React from 'react'
import { useCart } from 'react-use-cart';
import { useState } from 'react';
import './App.css'
import Order from './order';
import { useNavigate } from 'react-router-dom';
const Cart2 = (props) => {
    const[checkout,Setcheckout]=useState(false)
    const Navigate= useNavigate();
    const close=()=>{
        Setcheckout(false)
    }
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
    }=useCart();
    if(isEmpty){
        return(
            <>
             <h1 className='empty absolute top-[300px] left-[650px] font-extrabold text-2xl'>Your Cart is Empty</h1>
             <button className='relative top-[350px] left-8' onClickCapture={()=>{props.closeCart()}}>
                <a className="fancy">
  <span className="top-key"></span>
  <span className="text">Continue Shopping</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
</a>
 </button>
             </>
        )
    }

const Checkout=()=>{
return(
    <div >
    <Order close={close}/>
</div>
)
}
const charges=(S1)=>{
    S1=200;
   return S1+cartTotal;
}
  return (
    <div className='overflow-scroll bg-white-200 relative' style={{minHeight:'1500px', height:'3000px'}}>

        <span class="material-symbols-outlined absolute end-1 text-black" onClickCapture={()=>{props.closeCart()}}>close</span>
        <h5 className='text-black'>Cart {totalUniqueItems} total Items:{totalItems}</h5>
        <tbody >
            {items.map((item,index)=>{
                return(
                    <>
                <tr key={index} className='row relative '>
                    <td >
                        <img src={item.imageSrc} className='image mt-14 ml-32'/>
                    </td>
                    <td className='itname mt-2 text-black font-bold'>{item.name}<br></br>Rs: {item.price}</td>
                    <div className='relative top-32 ml-36 text-black'>
                    <td className='add border-solid border-2 border-black-500 rounded-lg bg-white'>
                        <button className='btn btn-info ms-2 mr-6'onClick={()=> updateItemQuantity(item.id,item.quantity-1)}>-</button>
                        {item.quantity}
                        <button className='btn2 btn-info ms-2 ml-8 mr-2 'onClick={()=> updateItemQuantity(item.id,item.quantity+1)}>+</button>
                    </td>
                    <button className='btn3 btn-danger ms-2 relative left-40 bottom-7'onClick={()=>removeItem(item.id,item.quantity)}><span class="material-symbols-outlined">delete</span></button>
                    </div>
                    
                </tr>
                </>
                )
                
            })}
            </tbody>
            <hr className='relative '></hr>
            <div className='flex justify-center center text-black opacity-0.5 mt-10 '>
        <h2 className='relative left-[-108px] font-bold'>Cart total:  &nbsp; </h2>
       <h3 className='font-medium relative left-6'> Rs: {cartTotal}.00</h3>
        </div>
        <div className='flex justify-center center text-black opacity-0.5 mt-4 '>
        <h2 className='relative left-[-110px] font-bold'>Shipping charges: &nbsp; </h2>
        <h3 className='relative left-[-8px] font-medium'> Rs: 200.00</h3>
        </div>
        <hr className='hr2 relative left-[400px] w-[600px] mt-4'></hr>
        <div className='flex justify-center center text-black opacity-0.5 mt-4 '>
        <h2 className='relative left-[-110px] font-bold'>Estimated Total: &nbsp; </h2>
        <h3 className='relative font-medium'> Rs: {charges()}.00</h3>
        </div>
       <>
       {checkout && <Checkout/>}
        <button className="btn-31 relative top-8" >
  <span className="text-container">
    <span className="text" onClick={()=>{Setcheckout(true)}}>CHECKOUT</span>
  </span>
</button>
</>
    </div>
  )
}

export default Cart2;
