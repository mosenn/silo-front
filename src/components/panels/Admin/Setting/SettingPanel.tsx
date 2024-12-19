import React from 'react'

export default  function SettingPanel() {
  return (
    <div className='bg-white w-full h-full p-4'  dir='rtl'>
        <form  className='grid  gap-4 '>
          <div className='w-[30%]'>
            <label htmlFor="name">نام :</label>
            <input type="text" id='name' className='bg-gray-100 w-full py-2 px-4 border-neutral-600 border rounded-xl' />
          </div>
          <div className='w-[30%]'>
            <label htmlFor="name">نام خانوادگی :</label>
            <input type="text" id='lastname' className='bg-gray-100 w-full py-2 px-4 border-neutral-600 border rounded-xl'  />
          </div>
          <div className='w-[30%]'>
            <label htmlFor="name">نام کاربری :</label>
            <input type="text" id='lastname' className='bg-gray-100 w-full py-2 px-4 border-neutral-600 border rounded-xl'  />
          </div>
          <div className='w-[30%]'>
            <label htmlFor="name">ایمیل :</label>
            <input type="text" id='lastname' className='bg-gray-100 w-full py-2 px-4 border-neutral-600 border rounded-xl'  />
          </div>
          <div className='w-[30%]'>
            <label htmlFor="name">  پسوورد :</label>
            <input type="text" id='lastname' className='bg-gray-100 w-full py-2 px-4 border-neutral-600 border rounded-xl'  />
          </div>
          <div className='w-[30%]'>
            <label htmlFor="name">تلفن :</label>
            <input type="text" id='lastname' className='bg-gray-100 w-full py-2 px-4 border-neutral-600 border rounded-xl'  />
          </div>
          <div  className='w-20 py-2 px-4 bg-gray-100 rounded-lg text-center border border-neutral-600'>
            <button type='submit'>ذخیره</button>
          </div>
        </form>
      
    </div>  
  )
}


