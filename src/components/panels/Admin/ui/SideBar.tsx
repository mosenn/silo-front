"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../../ui/panel/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../../lib/utils";
import Dashboard from "../Dashboard/ContentDashboard";
import SettingPanel from "../Setting/SettingPanel";

export function SidebarAdmin() {

  const [selectedTab, setSelectedTab] = useState<string>("allProducts");
  
    const renderContent = () => {
      switch (selectedTab) {
        case "dashboard":
          return <Dashboard />;
        case "settings":
          return <SettingPanel/>;
       
        default:
          return <Dashboard />;
      }
    };
    
  // const links = [
  //   {
  //     label: "Dashboard",
  //     href: "#",
  //     icon: (
  //       <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //     ),
  //   },
  //   {
  //     label: "Profile",
  //     href: "#",
  //     icon: (
  //       <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //     ),
  //   },
  //   {
  //     label: "Settings",
  //     href: "#",
  //     icon: (
  //       <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //     ),
  //   },
  //   {
  //     label: "Logout",
  //     href: "#",
  //     icon: (
  //       <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  //     ),
  //   },
  // ];
  const [open, setOpen] = useState(false);
  return (
    <div
    className={cn(
      "rounded-md flex  flex-col md:flex-row  bg-primary dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
      "h-[100vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
    )}
      
    >
      {renderContent()} 
      
      {/* {renderContent()} */}
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-10 mt-4">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              <div onClick={()=>setSelectedTab("dashboard")}>
              <SidebarLink
              link={{
                label: " Dashboard",
                href: "#",
                icon: (
                  <IconBrandTabler className="text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
              </div>
           
           <div onClick={()=>setSelectedTab("settings")} >
           <SidebarLink 
              link={{
                label: " Settings",
                href: "#",
                icon: (
                  <IconSettings className="text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
           </div>
             
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: " Koushki",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        ARNIA
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-sky-400 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content



