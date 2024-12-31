import Image from 'next/image'
import React from 'react'
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";


export default function Product({product}:any) {
  const truncateString = (str) => {
    return str.length > 20 ? str.slice(0, 20) + "..." : str;
  };
 
 
  return (
    <div className='w-[250px] h-[18rem] bg-slate-100 rounded-lg' >
      <div className='img' >
        <Image  src={product?.img} alt='product' width={200} height={400} className='w-72 h-40 object-contain' />
      </div>
      <div className='title flex justify-between items-center p-1 mt-1' >
        <MdOutlineReportGmailerrorred size={20} className='text-neutral-600' />
        <span className='text-lg'> {truncateString(product?.name )}</span>
      </div>
      <div className='shop w-6 h-4  bg-cyan-600 rounded-lg'><LuShoppingCart className='text-white' /></div>

        <div className='price'>
          <h2>{product?.price}</h2>
          <div className='flex gap-2 '>
            <span className='' >{`${product?.discount}%`}</span>
            <span className='line-through text-xs text-neutral-600 ' >{product?.price}</span>
          </div>

      </div>
      <h2>
        
      </h2>
      
    </div>
  )
}


