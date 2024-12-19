import Authbutton from "@/app/providers/AuthButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

 const updateProduct = async (product) => {
    const response = await axios.put(
      `https://api.example.com/products/${product.id}`, product, {
        headers: {
          Authorization: `Bearer ${'token'}`, // ارسال توکن به هدر
        },
    }   
     
    );
    return response.data;
  };

  export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: updateProduct,
      onSuccess: () => {
        console.log("با موفقیت اضافه شد ")
      },
      onError: (error) => {
        console.error("Update failed:", error);
      },
    });
  };