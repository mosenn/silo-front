import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequests from "@/app/services/auth/config";
import { useStorage } from "@/app/providers/context/userInfo";
import { ModalStatus } from "../ui/ModalStatus";
type Product = {
  farmerId: string;
  grainType: string;
  id: string;
  quantity: number;
  status: string;
};

type Products = Product[];

export default function ProductsPending() {
  const { userInfo } = useStorage();
  const token = userInfo?.data?.token;
  const fetchProducts = async () => {
    const res = await apiRequests.get("/order/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const filteredProducts = res.data.data.filter(
      (product: { status: string }) => product.status === "pending"
    );

    return filteredProducts;
  };

  const { data: produts } = useQuery<Products>({
    queryKey: ["allProductPending"],
    queryFn: fetchProducts,
  });

  return (
    <div className="overflow-x-auto mx-2 ">
      <table className="min-w-full bg-white  rounded-xl">
        <thead>
          <tr className="bg-primary  text-neutral-100 uppercase text-sm leading-normal">
            <th className="py-2 px-6 text-center "> آیدی کاربر</th>
            <th className="py-2 px-6 text-center "> وضعیت</th>
            <th className="py-2 px-6 text-center "> تعداد</th>

            <th className="py-2 px-6 text-center "> نام محصول</th>
          </tr>
        </thead>
        {produts?.map((product) => (
          <tbody
            className="text-gray-600 text-sm font-light text-center "
            key={product?.id}
          >
            <tr className="border-b border-gray-300 hover:bg-gray-100">
              <td className="py-3 px-6">{product?.farmerId}</td>
              <td className="md:py-3 md:px-6">
                <ModalStatus productId={product?.id} />
              </td>
              <td className="py-3 px-6">{product.quantity}</td>

              <td className="py-3 px-6">{product.grainType}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
