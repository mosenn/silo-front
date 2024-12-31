"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

type UserInfo = {
  data: {
    email: string;
    id: string;
    password: string;
    role: string;
    username: string;
    token: string
  };
  message: string;
  token: string;
  expiry: number;
};

type StorageContextType = {
  userInfo: Partial<UserInfo>;
  saveData: (newData: Partial<UserInfo["data"]>) => void;
  clearStorage: () => void;
};

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<Partial<UserInfo>>({});
  const [update, setUpdate] = useState(false);

  console.log(userInfo);

  useEffect(() => {
    const storedData = localStorage.getItem("userInfo");
    setUserInfo(storedData ? JSON.parse(storedData) : {});
  }, [update]);

  const saveData = (newData: Partial<UserInfo["data"]>) => {
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 ساعت به میلی‌ثانیه
    const updatedData = { 
      ...userInfo, 
      data: { ...userInfo.data, ...newData }, 
      expiry 
    };
    setUserInfo(updatedData);
    localStorage.setItem("userInfo", JSON.stringify(updatedData));
    setUpdate(!update);
  };

  const clearStorage = () => {
    setUserInfo({});
    localStorage.removeItem("userInfo");
    Cookies.remove("authToken");
    router.push('/');
  };

  return (
    <StorageContext.Provider
      value={{
        userInfo,
        saveData,
        clearStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
};




