"use client"
import { useState } from "react";
import CardHead from "./CardHead";
import ProductsPending from "./ProductPending";
import Allproducts from "./Allproduct";
import TodaySales from "./TodaySales";
import Users from "./Users";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("allProducts");

  const renderContent = () => {
    switch (selectedTab) {
      case "allProducts":
        return <div><Allproducts /></div>;
      case "todaySales":
        return <div><TodaySales /></div>;
      case "users":
        return <div><Users /></div>;
      case "pendingProduct":
        return <div><ProductsPending /></div>;
      default:
        return <div>داشبورد کاربری</div>;
    }
  };
  console.log(selectedTab)
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl overflow-y-auto  dark:border-neutral-700 bg-[#F6F7F9] dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full min-h-full">
        <CardHead setSelectedTab={setSelectedTab}  selectedTab={selectedTab}  />
        <div className="flex gap-2 flex-1">
            <div
              className=" h-full w-full rounded-lg   bg-gray-100 dark:bg-neutral-800"
            >
              
              <div>{renderContent()}</div> 

            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
