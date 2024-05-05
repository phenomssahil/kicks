import './App.css'
import { Product } from './prod';
import Prod from './product';
import React,{ useState } from 'react'
import { useCart } from 'react-use-cart';
  export default function Card(props) {
    const {addItem}=useCart();
    const[startimg,setStartimg]=useState(false);
    const close=()=>setStartimg(false)
    const Zoom=()=>{
        return(
           <div className='card2' onClick={()=>{close(true)}}>
            <div className='overlay'>{
            Product.images.map((breadcrumb,index)=>{
            <Prod images={breadcrumb}/>
            })
            }
              
              </div>
           </div>
        )
      }
  
    return (
      <div className="card">
        <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div>
           
              <a key={props.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="h-full w-full object-cover object-center"
                    onClick={()=>{setStartimg(true)}}
                  />{startimg && <Zoom/>}
                </div>
                <h3 className="mt-4 text-sm text-gray-700 text-nowrap overflow-hidden">{props.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$ {props.price}</p>  
                <button className='relative left-20' onClick={()=>addItem(props.item)}>
                <a className="fancy">
  <span className="top-key"></span>
  <span className="text">Add to Cart</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
</a>
 </button>
              </a>
        
          </div>
        </div>
      </div>
    );
  }
 