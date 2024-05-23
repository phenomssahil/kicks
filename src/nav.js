import { useState } from "react";
import Cart2 from "./cart2";
import './App.css';
import Card from "./cards";
import Products from "./data";
import Img from './image/noun-clothing-store-999966.png'
import Img1 from './image/home1.png'
import Img2 from './image/sneaker.png'
import Apparel from "./apparel";
import Package from "./product2";
import SignUp from "./signUp";
import Login from "./login";
import { Routes,Route } from 'react-router-dom';
import { useCart } from 'react-use-cart';
export default function Example(props){
  const handleClick = () => {
    window.location.reload(false);
  };
  const [open,Setopen]=useState(false);
  const[openShop,SetopenShop]=useState(false);
  const[home,Sethome]=useState(false);
  const[sign,Setsign]=useState(false)
  const[app,Setapp]=useState(false)
  const close=()=>{Setopen(false)
  SetopenShop(false)
   Setapp(false)}
   const closeCart=()=>{Setopen(false)
    }
  const cancel=()=>{
    Setsign(false)
  }
  const closeHome=()=>{
    Sethome(false)
  }
  const {
    totalItems,
}=useCart();
   const Shopcart=()=>{
    return(
      <div className="cart">
     <Cart2 closeCart={closeCart}/>
      </div>
    )
   }
   const Shop=()=>{
    return(
       <div className='bg-gray-200 container1 '>

{
  Products.map((item,index)=>{
    return(
     
    <Card imageSrc={item.imageSrc} name={item.name} href={item.href} price={item.price} id={item.id} key={index} item={item} size1={item.Size1} size2={item.Size2} size3={item.Size3} size4={item.Size4} />
    )
})
}
<div className="bg-gray-200 w-full h-10"></div>
<div className="bg-black w-full h-96"></div>
</div>
    )
   }
   const Clothing=()=>{
    return(
      <div className="bg-gray-100 container1">
{
  Package.map((item,index)=>{
    return(
    <Apparel imageSrc={item.imageSrc} name={item.name} href={item.href} price={item.price} id={item.id} key={index} item={item} size1={item.Size1} size2={item.Size2} size3={item.Size3} size4={item.Size4} />
    )
})
}
<div className="bg-gray-100 w-full h-10"></div>
<div className="bg-black w-full h-96"></div>
      </div>
    )
   }
   const Home=()=>{
    return(
    
      <div className="container">
      </div>
      
    )
   }
   const Sign=()=>{
    return(
     <div className="">
      <Routes>
    <Route path='/' element={<SignUp cancel={cancel}/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
      </div>
  )
}
    return(
        <div className="fixed w-full bg-stone-100 top-0 z-20">
            <nav className="nav bg-stone-100  h-28 cursor "><h1 className="title" onClickCapture={()=>{handleClick()}}>SOKICKS.</h1>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative top-[-20px] left-[90px] flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          {/* <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
           <div className="relative left-64 top-2"> 
           {openShop&& <Shop/>}
           {home&&<Home/>}
           {app && <Clothing/>}
           <img src={Img1} className="h-20 relative left-28 top-24 border-white"onClick={()=>{Sethome(true);close()}}></img>
           <img src={Img2} className="h-20 relative left-64 top-4"onClick={()=>{SetopenShop(true);closeHome()}}></img>
            <img src={Img} alt="shop" className="h-20 relative left-96 bottom-16" onClick={()=>{Setapp(true)}} ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
    <div className="bg-white h-40">
    <div className="mob relative left-[500px]"> 
           {openShop&& <Shop/>}
           {home&&<Home/>}
           {app && <Clothing/>}
           <img src={Img1} className="pic h-20 relative left-28 border-white"onClick={()=>{Sethome(true);close()}}></img>
           <img src={Img2} className="pic h-20 relative left-64 top-[-80px]"onClick={()=>{SetopenShop(true);closeHome()}}></img>
            <img src={Img} alt="shop" className="pic h-20 relative left-96 top-[-155px]" onClick={()=>{Setapp(true)}} ></img>
            </div>
    </div>
  </div>
      <div className="relative top-6">
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="items w-[15px] h-[15px] rounded-lg bg-black relative top-[-12px] left-[38px] "><h5 className=" text-xs text-white text-center ">{totalItems}</h5></div>
        <button type="button" className="shop relative rounded-full w-10 h-10 center p-2 " onClick={()=>{Setopen(true)}}>{open &&<Shopcart/>}
          <span className="material-symbols-outlined ">shopping_cart</span>
        </button>
      
        <button type="button" className="shop relative rounded-full center p-2 text-black-400  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-5"onClick={()=>{Setsign(true)}}>{sign && <Sign/>}
        <span class="material-symbols-outlined">person</span>
        </button>
        </div>
        <div className="relative ml-3">
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>

    );
}