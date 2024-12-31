"use client"
import React, { useEffect, useState } from 'react'
import { useStorage } from './userInfo';

function ProviderInfo({children}) {
      const [userInfo, setUserInfo] = useState({});
    
      console.log(userInfo)
    
      useEffect(() => {
        const storedData = localStorage.getItem("userInfo");
        setUserInfo(storedData ? JSON.parse(storedData) : {});
      }, []);
   
    if(userInfo?.data){
      return (
        <div>
          {children}
        </div>
      )
    }else{
      <div className='flex justify-center  items-center bg-red-400 text-xl'>info not defined</div>
    }
 
}

export default ProviderInfo
