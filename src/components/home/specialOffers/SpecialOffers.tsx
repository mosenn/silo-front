import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import phone1 from "../../../../public/assets/phone1.png";
import phone2 from "../../../../public/assets/phone2.png";
import phone3 from "../../../../public/assets/phone3.png";
import phone4 from "../../../../public/assets/phone4.png";
import phone5 from "../../../../public/assets/phone5.png";
import phone6 from "../../../../public/assets/phone6.png";
import Product from '@/components/ui/cardProduct';
import ProdutsSection from '@/components/ui/main/produtsSection';
export default  function SpecialOffers() {
  const specialProducts = [
    {name : "Apple iPhone 14 Plus"  ,img : "/assets/phone1.png" , id:1 ,price : "1000000000" , discount : "10"},
    {name : "Apple iPhone 14 Plus"  ,img : "/assets/phone2.png" , id:2 ,price : "9000000000" , discount : "15"},
    {name : "Apple iPhone 14 Plus"  ,img: "/assets/phone3.png" , price : "9000000000", discount : "10"},
    {name : "Apple iPhone 14 Plus"  ,img : "/assets/phone4.png" , id:4 ,price : "9000000000" , discount : "15"},
    // {name : "iphone"  ,img : {phone5} , id:5 ,price : "1000000000" , discount : "15"},
    // {name : "iphone"  ,img : {phone6} , id:6 ,price : "9000000000" , discount : "10"}

  ]
  return (
    <div className='h-[100vh] mt-4 flex justify-center items-center overflow-x-auto'>
    <div className='bg-primary w-[94%] h-[23rem] rounded-lg  '>
      <div className='flex flex-col-reverse justify-start items-end md:flex-row md:justify-between text-slate-100 font-medium m-2'>
        <div className='text-lg flex justify-center items-center gap-2'>
          <span>
            <MdKeyboardArrowRight size={20} className='text-[#ADC6FF]' />
          </span>
          <span className='text-slate-200'>بیشتر ...</span>
        </div>
        <div className='font-medium flex justify-center items-center gap-2'>
          <span className='text-xl'>پیشنهادات ویژه</span>
          <span className='w-1 h-8 bg-[#ADC6FF] rounded-lg'></span>
        </div>
      </div>
      <ProdutsSection  products={specialProducts}  />
     
    </div>
  </div>
  
  )
}


