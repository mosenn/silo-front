import Image from 'next/image'
import React from 'react';
import iphone from "../../../../public/assets/iphones.png"
import Link from 'next/link';

export default  function Header() {
  return (

    <div className='flex justify-between mx-auto  '>
        <div className= 'hidden md:block w-72 h-48 bg-[#597EF7] p-8 blur-[120px] mt-14' ></div>
        {/* content main  */}
       <div className='flex flex-col justify-center items-center mx-auto'>
       <Image  src={iphone}  alt='phones' className='w-[250px] md:w-[370px] lg:w-[400px] h-full object-contain mt-10 mx-auto text-center' />
        <div className='w-72 md:w-full text-start md:text-center'>
          <h1 className='flex-wrap  text-3xl md:text-5xl font-bold  '>
            
            بهترین معاملات  وب را  در سایت ما کشف کنید</h1>
            <span className='text-neutral-700 font-medium' > همین حالا خرید کنید و از تخفیف های منحصر به فرد در طیف گسترده ای از محصولات بهره مند شوید</span>
          
        </div>
        <div className='flex gap-4 mt-5'>
              <Link className='text-lg border border-primary text-white bg-primary rounded-lg w-36 py-[2px] '  href={"/"} >خرید</Link  >
              <Link  className='text-lg border border-primary text-primary rounded-lg w-36 py-[2px]  ' href={"/"} >بیشتر بدانید</Link  >
            </div>
       </div>
        <div className='hidden md:block  w-72 h-48 bg-[#597EF7]  p-8 blur-[120px] mt-60' ></div>

      
    </div>
  )
}


