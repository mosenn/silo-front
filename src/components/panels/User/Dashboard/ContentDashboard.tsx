"use client"
import { useState } from "react";
import DashboardCardsUser from "./CardHeadUser";
import Sell from "./sell";
import MyProducts from "./MyProducts";
import AddingProduct from "./AddingProduct";


const DashboardUser = () => {
  const [selectedTab, setSelectedTab] = useState<string>("allProducts");

  const renderContent = () => {
    switch (selectedTab) {
      case "allProducts":
        return <MyProducts />;
      case "todaySales":
        return <Sell /> ;
      case "users":
        return <div>قسمت2</div>;
      case "addProduct":
        return <AddingProduct />;
      default:
        return <div>داشبورد کاربری</div>;
    }
  };
  
  return (
    <div className="flex flex-1  ">
      <div className="p-2 md:p-10 rounded-tl-2xl border bg-[#F6F7F9] dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full min-h-screen">
        <DashboardCardsUser setSelectedTab={setSelectedTab}  selectedTab={selectedTab}  />
        <div className="flex gap-2 flex-1">
            <div
              className=" h-full w-full rounded-lg   dark:bg-neutral-800"
            >
              
              <div>{renderContent()}</div> 

            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
