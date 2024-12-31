"use client";
import { useStorage } from "@/app/providers/context/userInfo";
import apiRequests from "@/app/services/auth/config";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Product = {
  farmerId: string;
  grainType: string;
  id: string;
  quantity: number;
  status: string;
};

type Products = Product[];

export default function Allproducts() {
  const { userInfo } = useStorage();
  const token = userInfo?.data?.token;

  const fetchProducts = async () => {
    const res = await apiRequests.get("/order/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const filteredProducts = res.data.data.filter(
      (product: { status: string }) => product.status === "done"
    );

    return filteredProducts;
  };

  const { data } = useQuery<Products>({
    queryKey: ["allProductAdmin"],
    queryFn: fetchProducts,
  });
  // console.log(data)
  return (
    <div className="overflow-x-auto mx-2 h-full">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-primary text-neutral-100 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center"> status</th>
            <th className="py-3 px-6 text-center"> تعداد</th>

            <th className="py-3 px-6 text-center"> نام محصول</th>
          </tr>
        </thead>
        {data?.map((product) => (
          <tbody
            key={product.id}
            className="text-gray-600 text-sm font-light text-center"
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
  );
}
