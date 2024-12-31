"use client";

import React from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiRequests from "@/app/services/auth/config";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Order } from "./MyProducts";
import { useStorage } from "@/app/providers/context/userInfo";
import { toast, ToastContainer } from "react-toastify";

const addProductSchema = z.object({
  grainType: z.string().min(2, "نام محصول را وارد کنید"),
  quantity: z
    .string()
    .refine((value) => parseInt(value) > 10, "مقدار باید بیشتر از 10 کیلوگرم باشد"),
});
type AddProduct = z.infer<typeof addProductSchema>;

function AddingProduct() {
  const queryClient = useQueryClient();
  const {userInfo} = useStorage()
   
   const token = userInfo?.data?.token;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddProduct>({
    resolver: zodResolver(addProductSchema),
  });

  const addProduct = async (data: AddProduct) => {
    if (!token) throw new Error("Token is missing");
    const response = await apiRequests.post("/order/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;

  };

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (newProduct) => {
      queryClient.invalidateQueries(['productsuser'])
      // console.log(queryClient.invalidateQueries(['productsuser']))

      toast.success("محصول با موفقیت اضافه شد!");
  },
    onError: (error) => {
      // console.error("Error adding product:", error);
      toast.error("خطا در افزودن محصول!");
    },
  });

  const onSubmit = (data: AddProduct) => {
    if (!!token) {
      mutation.mutate(data);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6 mt-6">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center p-2 pb-4">
        افزودن محصول
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.quantity && (
          <p className="text-red-500 text-sm text-center">{errors.quantity.message}</p>
        )}
        {errors.grainType && (
          <p className="text-red-500 text-sm text-center">{errors.grainType.message}</p>
        )}
        <div className="mb-4">
          <label htmlFor="grainType" className="block text-sm font-semibold text-gray-700">
            نوع محصول
          </label>
          <input
            {...register("grainType")}
            type="text"
            id="grainType"
            placeholder="مثلاً گندم"
            className="mt-1 p-3 block w-full rounded-md outline-none border-0 shadow-sm focus:border-2 focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700">
            مقدار (کیلوگرم)
          </label>
          <input
            {...register("quantity")}
            type="number"
            id="quantity"
            placeholder="مثلاً 50"
            className="mt-1 p-3 block w-full rounded-md outline-none border-0 shadow-sm focus:border-2 focus:border-primary sm:text-sm"
          />
        </div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="w-full mt-2 font-semibold bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          افزودن محصول
        </motion.button>
      </form>
    </div>
  );
}

export default AddingProduct;


