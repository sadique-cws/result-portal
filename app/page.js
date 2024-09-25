import React from 'react'
import CallingTable from './components/callingTable'


const page = () => {
  return (
    <div className=' w-full bg-gray-200 h-screen '>
      <div className='flex justify-center py-3 font-bold text-3xl bg-gray-100'><h1 className=''>Result Management System</h1></div>
      <div className='py-3 px-[2%]'>
      <CallingTable/>
      </div>
    
    </div>
  )
}

export default page