"use client";
import { useStorage } from "@/app/providers/context/userInfo";
import Link from "next/link";
import React, {  useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
export default function Head() {
  const { userInfo, clearStorage } = useStorage();
  const [open, setOpen] = useState(false);
  
 
// console.log(userInfo)


  return (
    <div className="flex justify-center ">
      <div className=" flex justify-center relative z-40 md:fixed w-full md:w-[88%]  h-10 mx-auto ">
      {/* mobile  */}
        <div
          className={`md:hidden transition-all duration-300 ease-in   ${open ? "translate-x-[0px]" : "translate-x-[800px]"
            } bg-[#F6F7F9] p-4  z-50 absolute h-[100vh]  w-full  `}
        >
          <div className="flex justify-end ">
            <IoClose onClick={() => setOpen(!open)} size={20} />
          </div>
          {userInfo?.data?.token && (
            <div className="flex gap-4 items-center">
              
              <div className="img-user w-16 h-16 rounded-full bg-blue-300"></div>
              <div className="flex flex-col">
                <span>{userInfo?.data?.data?.username}</span>
                <span>{userInfo?.data?.data?.email}</span>
              </div>
              {/* <span onClick={()=> clearStorage()}>خروج</span>  */}
            </div>
          )}
          <div className="  flex flex-col gap-6  text-black text-lg font-bold mt-4 ">
            <Link onClick={()=>setOpen(!open) } className="ml-4" href={"/"}>
              خانه
            </Link>
            <Link onClick={()=>setOpen(!open)} className="ml-4" href={"/"}>
              محصولات
            </Link>
            <Link onClick={()=>setOpen(!open)} className="ml-4" href={"/"}>
              درباره ما
            </Link>
            <Link onClick={()=>setOpen(!open)} className="ml-4" href={"/"}>
              {" "}
              ارتباط با ما
            </Link>
          </div>
          {!userInfo?.data?.token &&
            <div className="flex flex-col justify-center items-center gap-4 text-center mt-12" >
              <Link onClick={()=>setOpen(!open)} href={"/register"} className="border flex justify-center items-center  text-xl border-primary w-full h-12 rounded-lg bg-primary text-slate-50">
                ثبت نام
              </Link>
              <Link onClick={()=>setOpen(!open)} href={"/login"} className="border flex justify-center items-center  text-xl border-primary w-full h-12 rounded-lg text-primary">
                ورود
              </Link>
            </div>
          }
        </div>
          {/* desktop */}
        <div className="w-full md:w-[90%] text-center mt-3 h-10 flex justify-between items-center !bg-white   rounded-lg  md:top-4  md:p-6 ">
        <div className="mx-2 flex md:hidden items-center gap-2  ">
          
            <AiOutlineMenu
              size={20}
              className="md:hidden"
              onClick={() => setOpen(!open)}
            />
            <div className="md:hidden">
              <LuShoppingCart size={20} />
            </div>
          
          
          </div>
        <div className=" mx-2 flex items-center gap-3 ">
            <FiSearch size={20} className="md:hidden" />
            <h2 className="font-bold text-2xl text-[#597EF7]">کارتو</h2>

            <div className="hidden md:flex justify-center items-center border  rounded-lg   h-8  text-center">
              <input
                type="text"
                className="outline-0 focus:outline-0 mx-2 "
                placeholder="جستجو کنید"
              />
              <div className="bg-primary flex justify-center items-center h-8 rounded-lg w-8  ">
                <FiSearch size={15} className="text-slate-100" />
              </div>
            </div>
          </div>

        
          <div className="hidden md:flex gap-3 text-neutral-900 text-lg  ">
            <Link className="hover:text-primary transition-all duration-300 ease-in focus:text-primary" href={"/"}>خانه</Link>
            <Link className="hover:text-primary transition-all duration-300 ease-in focus:text-primary" href={"/"}>محصولات</Link>
            <Link className="hover:text-primary transition-all duration-300 ease-in focus:text-primary" href={"/"}> ارتباط با ما</Link>
            <Link className="hover:text-primary transition-all duration-300 ease-in focus:text-primary" href={"/"}>درباره ما</Link>
          </div>

        
          <div className="hidden md:flex gap-3 ">
              {userInfo?.data?.token ? (
                <div className="flex gap-2">
                  {" "}
                  <div className="border border-primary w-16 h-8 rounded-lg bg-primary text-slate-50 text-[12px]">{userInfo?.data?.data?.username}</div>{" "}
                  <div className="border border-primary w-16 h-8 rounded-lg text-primary" onClick={() => clearStorage()}>خروج</div>{" "}
                </div>
              ) : (
                <>
                  
                  <Link
                    href={"/login"}
                    className="border border-primary w-16 h-8 rounded-lg text-primary"
                  >
                    ورود
                  </Link>
                  <Link
                    href={"/register"}
                    className="border border-primary w-16 h-8 rounded-lg bg-primary text-slate-50"
                  >
                    ثبت نام
                  </Link>
                </>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
