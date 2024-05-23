import React from 'react'
import { useCart } from 'react-use-cart';
const Done = () => {
    const handleClick = () => {
        window.location.reload(false)
      };
      const {
        emptyCart,
    }=useCart();
  return (
    <div>
            <div className='container3 bg-gray-100 h-[1000px] z-50'>
                <div className='relative left-[500px]'>
                    <img src='https://cdn.dribbble.com/users/3430880/screenshots/7225016/media/26d5d4abe76537f282649abc89ad8449.gif' className='w-[500px] h-96 relative top-[100px]'></img>
                    <h1 className='absolute text-black left-[160px] top-[500px] text-green-600'>Order Confirmed!!</h1>
                    <span className='absolute text-black left-[210px] hover:text-blue-600 top-[525px]'onClick={handleClick} onClickCapture={emptyCart}>Home<span class="absolute material-symbols-outlined">arrow_right_alt</span></span>
                </div>
            </div>
    </div>
  )
}

export default Done
