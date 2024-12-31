import React from 'react'
import Product from '../cardProduct'

export default function ProdutsSection({products }) {
    console.log(products)
  return (
    <div className='w-full flex justify-center  gap-3 overflow-x-auto  scrollbar-hidden '>
        {products?.map((product , idex) => (
          <div key={idex} className='  rounded-lg'>
          <Product product={product} />
        </div>
        ))}
      </div>
  )
}


