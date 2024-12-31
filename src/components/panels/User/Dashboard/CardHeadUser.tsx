import React from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoWallet } from "react-icons/io5";
import { motion } from "framer-motion";

interface componentProps {
  setSelectedTab : (value:string)=>void,
  selectedTab : string

}

export default function DashboardCardsUser({ setSelectedTab,selectedTab} : componentProps) {
  

  return (
    <motion.div  className="flex gap-2 mt-8">
      {/* all products  */}
      <motion.div  whileTap={{ scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 400 }}  onClick={()=> {setSelectedTab("allProducts") }} className={` ${selectedTab === "allProducts" ? "bg-primary text-white/95 " :  "bg-white text-neutral-800"}  border-l-0  border-t-0 border-r-primary border-2   border-b-0  h-24 p-2 hover:bg-primary hover:text-white/95  text-sm text-balance  w-full rounded-lg  flex flex-col items-center md:items-stretch    md:flex-row  md:justify-between transition-all   cursor-pointer  dark:text-white  dark:bg-neutral-800 `}>
        <div>
          <TbReportAnalytics className="size-7 md:size-9"  />
        </div>

        <div className="flex flex-col justify-between  items-center font-semibold text-center">
          <span> محصولات من </span>
          <span>{0}</span>
        </div>
      </motion.div>
      {/* Today's sales */}
      <motion.div  whileTap={{ scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 400 }} onClick={()=>setSelectedTab("todaySales")} className={` ${selectedTab === "todaySales" ? "bg-primary text-white/95 " : "bg-white text-neutral-800"} border-l-0  border-t-0 border-r-primary border-2   border-b-0 h-24 p-2 hover:bg-primary hover:text-white/95 text-sm md:text-base w-full rounded-lg    flex flex-col items-center md:items-stretch     md:flex-row  md:justify-between cursor-pointer transition-all  dark:text-white  dark:bg-neutral-800 `}>
        <div>
          <TbReportAnalytics  className="size-7 md:size-9"  />
        </div>

        <div   className="flex flex-col  justify-between items-center font-semibold text-center">
          <span> فروش ها </span>
          <span>{0}</span>
        </div>
      </motion.div>
      {/*users */}
      <motion.div  whileTap={{ scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 400 }} onClick={()=> setSelectedTab("users")} className={` ${selectedTab === "users" ? "bg-primary text-white/95 " : "bg-white text-neutral-800"} border-l-0  text-sm md:text-base border-t-0 border-r-primary border-2   border-b-0 h-24 p-2 hover:bg-primary hover:text-white/95  w-full rounded-lg  transition-all  flex flex-col items-center md:items-stretch     md:flex-row  md:justify-between cursor-pointer  dark:text-white  dark:bg-neutral-800 `}>
        <div>
        <IoWallet className="size-7 md:size-9"   />
        </div>

        <div className="flex flex-col justify-between items-center font-semibold text-center">
          <span> کیف پول </span>
          <span>{0}</span>
        </div>
      </motion.div>
      {/*  Adding product */}
      <motion.div  whileTap={{ scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 400 }}  onClick={()=> {setSelectedTab("addProduct")}} className={` ${selectedTab === "pendingProduct" ? "bg-primary text-white/95" : "bg-white text-neutral-800"}  border-l-0  border-t-0 border-r-primary border-2  text-sm md:text-base   border-b-0 h-24 p-2 hover:bg-primary hover:text-white/95  w-full rounded-lg  transition-all  flex flex-col justify-center items-center md:items-stretch     md:flex-row  md:justify-between cursor-pointer  dark:text-white  dark:bg-neutral-800 `}>
        <div>
        <RiBarChartBoxLine  className="size-7 md:size-9"   />
        </div>

        <div className="flex flex-col justify-between items-center font-semibold text-center">
          <span> اضافه کردن محصول </span>
          <span>{0}</span>
        </div>
      </motion.div>

    </motion.div >
  );
}
