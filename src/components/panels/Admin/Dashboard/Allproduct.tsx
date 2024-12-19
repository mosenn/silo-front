"use client"
import apiRequests from '@/app/services/auth/config'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import React, { use } from 'react'

export default function Allproducts() {
  const user = useSession();
  const token = user.data?.user.accessToken

  const fetch = async()=> {
    const res = await apiRequests.get("/order/admin" , {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    return res.data.data

  }

  const { data } = useQuery({
    queryKey: ['todos'],
     queryFn:fetch
    }
  )
  // console.log(data)
  return (
    <div className="overflow-x-auto mx-2 h-full">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-primary text-neutral-100 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center"> ایمیل</th>
            <th className="py-3 px-6 text-center"> تعداد</th>

            <th className="py-3 px-6 text-center"> نام محصول</th>
          </tr>
        </thead>
      {
        data?.map((product)=> (
          <tbody key={product.id} className="text-gray-600 text-sm font-light text-center">
          <tr className="border-b border-gray-300 hover:bg-gray-100">
          <td className="py-3 px-6">{product.status}</td>
                <td className="py-3 px-6">{product.quantity}</td>
                <td className="py-3 px-6">{product.grainType}</td>
          </tr>
        
        </tbody>
        ))
      }
      </table>
    </div>
  )
}


