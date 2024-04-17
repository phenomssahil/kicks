import './App.css'
import React,{ useState } from 'react'
import Products from './data';

  export default function Card() {
    const[startimg,setStartimg]=useState(false);
    const close=()=>setStartimg(false)
    const Zoom=()=>{
        return(
           <div className='card2'>
          {Products.map((pro)=>(
            <a key={pro.id} href={pro.href} className="group">
            <img src={pro.imageSrc}style={{opacity:1}}></img>
            </a>
          ))}
    

           </div>
        )
    }
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                    onClick={()=>{setStartimg(true)}}
                    // onDoubleClick={()=>{close()}}
                  />{startimg && <Zoom/>}
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>  
                {/* <button className='bg-blue-500'>ADD</button> */}
                <button className="animated-button" onClick={()=>{setStartimg(true)}}>{startimg && <Zoom/>}
  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">Add</span>
  <span className="circle"></span>
  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
 </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
 