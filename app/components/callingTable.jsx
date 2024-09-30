import React from 'react'

const CallingTable = () => {
  return (
     <div className='flex flex-col gap-2 bg-white p-5  font-bold'>

      <div className='flex flex-1 justify-between'>
       <h1 className='font-bold'> Student Name: <span className='text-gray-500 ml-2'> </span> </h1>
       <h1 className=''>Session:<span className='text-gray-500 ml-2'>2024-2025</span></h1>
      </div>
      <div className='flex flex-1 justify-between'>
       <h1> Father's Name:<span className='text-gray-500 ml-2'> </span> </h1>
       <h1>Term:<span className='text-gray-500 ml-2'> First</span></h1>
      </div>
      <div className='flex flex-1 justify-between'>
       <h1> School name:<span className='text-gray-500 ml-2'> </span> </h1>
       <h1>Position:<span className='text-gray-500 ml-2'> 1st</span></h1>
      </div>
      <div className='flex flex-1 justify-between'>
       <h1> Address:<span className='text-gray-500 ml-2'> </span> </h1>
       <h1>Grade:<span className='text-gray-500 ml-2'> A</span></h1>
      </div>

     <table className='border w-full'>

        <thead className=''>
          <tr className=''>
          <th className='border p-3 bg-gray-600 text-white' scope='col'>#</th>
          <th className='border p-3 bg-gray-600 text-white font-serif' scope='col'> Subject</th>
          <th className='border p-3 bg-gray-600 text-white font-serif' scope='col'> Score</th>
          <th className='border p-3 bg-gray-600 text-white font-serif'scope='col'> Remarkes</th>
          

        </tr>
        </thead>
        <tbody>

          <tr>
            <th className='border p-3'>1</th>
            <th className="border p-3" scope='row'> English</th>
            
            <td className="border p-3"></td>
            <td className="border p-3 text-gray-500">Very Good</td>
          </tr>

          <tr>
            <th className='border p-3'>2</th>
            <th className="border p-3" scope='row'> Hindi</th>
            
            <td className="border p-3"></td>
            <td className="border p-3 text-gray-500">Very Good</td>
          </tr>

          <tr>
            <th className='border p-3'>3</th>
            <th className="border p-3" scope='row'> Mathematics</th>
            
            <td className="border p-3"></td>
            <td className="border p-3 text-gray-500">Very Good</td>
          </tr>

          <tr>
            <th className='border p-3'>4</th>
            <th className="border p-3" scope='row'> Science</th>
            
            <td className="border p-3"></td>
            <td className="border p-3 text-gray-500">Very Good</td>
          </tr>

          <tr>
            <th className='border p-3'>5</th>
            <th className="border p-3" scope='row'> Socal Science</th>
            
            <td className="border p-3"></td>
            <td className="border p-3 text-gray-500">Very Good</td>
          </tr>


        </tbody>

     </table>
    
    </div>

  )
}

export default CallingTable