import React from 'react'
import { useCart } from 'react-use-cart';
import './App.css'
const Cart2 = () => {
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();
    if(isEmpty){
        return <h1 className='bg-white items-center justify-center'></h1>
    }
  return (
    <div className='overflow-scroll' style={{minHeight:'1500px', height:'3800px'}}>

        <span class="material-symbols-outlined absolute end-1 text-black">close</span>
        <h5 className='text-black'>Cart {totalUniqueItems} total Items:{totalItems}</h5>
        <tbody >
            {items.map((item,index)=>{
                return(
                    <>
                <tr key={index} className='relative '>
                    <td >
                        <img src={item.imageSrc} className='image mt-14 ml-32'/>
                    </td>
                    <td className='mt-2 text-black font-bold'>{item.name}<br></br>Rs: {item.price}</td>
                    <div className='relative top-32 ml-36 text-black'>
                    <td className='border-solid border-2 border-black-500 rounded'>
                        <button className='btn btn-info ms-2 mr-6'onClick={()=> updateItemQuantity(item.id,item.quantity-1)}>-</button>
                        {item.quantity}
                        <button className='btn btn-info ms-2 ml-7 mr-2 'onClick={()=> updateItemQuantity(item.id,item.quantity+1)}>+</button>
                    </td>
                    <button className='btn btn-danger ms-2 relative left-40 bottom-7'onClick={()=>removeItem(item.id,item.quantity)}><span class="material-symbols-outlined">delete</span></button>
                    </div>
                    
                </tr>
                </>
                )
                
            })}
            </tbody>
            <hr ></hr>
            <div className='flex justify-center center text-black opacity-0.5 mt-10'>
        <h2 className='font-bold'>Estimated total: Rs &nbsp; </h2>
        {cartTotal}.00
        </div>
        <h5 className='text-black'> Taxes, Discounts and shipping calculated at checkout</h5>
    </div>
  )
}

export default Cart2;
