import Card from "./cards"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

const callouts = [
    {
      name: 'Apparels & Accessories',
      description: 'NEW ARRIVAL',
      imageSrc: 'https://i.pinimg.com/564x/ff/bc/c7/ffbcc75f3bfa5a6503bc4fd1796a4844.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Sneakers',
      description: 'NEW ARRIVAL',
      imageSrc: 'https://i.pinimg.com/564x/47/d9/56/47d9562625db3d2effed39bb4af32d6d.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Apparels ',
      description: 'NEW ARRIVAL',
      imageSrc: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/CDC%20Experience%20is%20a%20one%20of%20its%20kind%20sneaker%20and%20streetwear%20lifestyle%20store.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function Home() {
    const nav=useNavigate();
    const [kicks,Setkicks]=useState(false)
    const handleClick=()=>{
      nav('/sneakers')
    }
    const Kicks=()=>{
      return(
        <div className="container1">
        <Card/>
        </div>
      )
    }
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center opacity-100"/>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  