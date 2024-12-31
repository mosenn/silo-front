import React from 'react'
import { object } from 'zod'

export default  function Categories() {
    const catrgories:object[] = [
        {name : "گوشی ها"},
        {name : " ایرپادها"},
        {name : "ساعت هوشمند"},
        {name : "لوازم جانبی"},
        {name : "قاب گوشی"},

    ]
  return (
    <div className='w-full flex  md:justify-center overflow-x-auto scrollbar-hidden mt-10'>  
    <div className='flex flex-nowrap items-center gap-8'>  
        {  
            catrgories.map((category) => (  
                <div key={category.name} className='flex flex-col items-center'>  
                    <div className='w-24 h-24 md:w-28 md:h-28 border border-primary rounded-full flex items-center justify-center'>  
                        {/* اینجا می‌توانید محتوا مانند آیکون یا تصویر را بگذارید */}  
                    </div>  
                    <h2 className='font-medium text-lg text-neutral-950 mt-2'>{category?.name}</h2>  
                </div>  
            ))  
        }  
    </div>  
</div>
  )
}


