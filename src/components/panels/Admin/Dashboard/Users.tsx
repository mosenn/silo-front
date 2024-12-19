import React from 'react'

export default  function Users() {
  return (
    <div className="overflow-x-auto mx-2">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-center"> ایمیل</th>
            <th className="py-3 px-6 text-center"> نام کاربری</th>

            <th className="py-3 px-6 text-center"> نام محصول</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light text-center">
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6">مقدار ۱</td>
           
            <td className="py-3 px-6">مقدار ۳</td>

            <td className="py-3 px-6">مقدار ۳</td>
          </tr>
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6">مقدار ۱</td>
           
            <td className="py-3 px-6">مقدار ۳</td>

            <td className="py-3 px-6">مقدار3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


