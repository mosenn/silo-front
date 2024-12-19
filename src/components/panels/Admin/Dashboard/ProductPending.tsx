import React from "react";
import { AnimatedModalDemo } from "../ui/Modal";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUpdateProduct } from "@/app/services/admin/updateProduct";

export default function ProductsPending() {
  const updateProductMutation = useUpdateProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: 1, // شناسه محصول
      name: "گندم",
      price: 150,
      status  : "done"
    };
    updateProductMutation.mutate(updatedProduct);
  };
  return (
    <div className="overflow-x-auto mx-2 ">
      <table className="min-w-full bg-white  rounded-xl">
        <thead>
          <tr className="bg-primary  text-neutral-100 uppercase text-sm leading-normal">
            <th className="py-2 px-6 text-center "> ایمیل</th>
            <th className="py-2 px-6 text-center "> وضعیت</th>
            <th className="py-2 px-6 text-center "> تعداد</th>

            <th className="py-2 px-6 text-center "> نام محصول</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light text-center">
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6">fatemekoushki3@gmail.com</td>
            <td className= "md:py-3 md:px-6" onClick={(e)=>{handleSubmit(e)}} >
              <AnimatedModalDemo />
            </td>
            <td className="py-3 px-6">100</td>

            <td className="py-3 px-6">گندم</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6">مقدار ۱</td>
            <td className="md:py-3 md:px-6">
              <AnimatedModalDemo />
            </td>
            <td className="py-3 px-6">مقدار ۳</td>

            <td className="py-3 px-6">مقدار3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
