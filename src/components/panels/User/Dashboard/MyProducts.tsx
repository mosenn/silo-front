import apiRequests from "@/app/services/auth/config";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export interface Farmer {
  id: string;
  username: string;
  email: string;
  role: "FARMER";
  password: string;
}

export interface Order {
  farmer: Farmer;
  farmerId: string;
  grainType: string;
  id: string;
  quantity: number;
  status: "pending" | "approved" | "rejected";
}

function MyProducts() {
  const user = useSession();
  const token = user.data?.user?.accessToken;
  const fetchProducts = async (token: string) => {
    if (!token) throw new Error("Token is missing");
    const response = await apiRequests.get("/order/farmer/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.value;
  };
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["productsuser"], // کلید کش
    queryFn: () => fetchProducts(token!), 
    // staleTime : 0
    
    
  });
  console.log( "product me",  data)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message || "An error occurred"}</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto mx-2 ">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-primary text-neutral-100 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">وضعیت</th>
              <th className="py-3 px-6 text-center">تعداد</th>
              <th className="py-3 px-6 text-center">نام محصول</th>
            </tr>
          </thead>
          {data.length > 0 && data?.map((product ,idx) => (
            <tbody
              className="text-gray-600 text-sm font-light text-center"
              key={idx}
            >
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6">{product.status}</td>
                <td className="py-3 px-6">{product.quantity}</td>
                <td className="py-3 px-6">{product.grainType}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyProducts;

