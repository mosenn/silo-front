"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function Authbutton() {
  const { data: sesstion } = useSession();
  return (
    <>
     
      <div className="flex justify-center items-center gap-4 mt-2">
        <button
          className="py-2 px-8 lg:py-3  lg:px-14  border rounded-lg hover:border-primary transition-all duration-300 ease-in-out"
          onClick={() => signIn("facebook")}
        >
          <FaFacebook size={24} className="text-primary" />
        </button>
        <button
          className=" py-2 px-8  lg:py-3  lg:px-14 border rounded-lg hover:border-primary transition-all duration-300 ease-in-out"
          onClick={() => signIn("google")}
        >
          <FcGoogle size={24} />
        </button>
        <button
          className="py-2 px-8  lg:py-3  lg:px-14 border rounded-lg hover:border-primary transition-all duration-300 ease-in-out"
          onClick={() => signIn("apple")}
        >
          <FaApple size={24} />
        </button>
      </div>
    </>
  );
}
