import React from 'react'

const Insert = () => {
  return (
    <form action="" className='flex flex-1 p-2  bg-slate-500  font-bold  items-start flex-col'>
      <div className='flex flex-col gap-2'>
        <div className='flex  mb-3  '>
          <label htmlFor="name">Name :- </label>
          <input type="text" id='name' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="fatherName">Father's Name :-</label>
          <input type="text" id='fatherName' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="motherName">Mother's Name :-</label>
          <input type="text" id='motherName' />
        </div>

        <div className='flex mb-3'>
          <label htmlFor="schoolName">School's Name :-</label>
          <input type="text" id='fatherName' />
        </div>

        <div className='flex mb-3'>
          <label htmlFor="address">Address :-</label>
          <input type="text" id='address' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="english">English :-</label>
          <input type="number" id='english' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="hindi">Hindi :-</label>
          <input type="number" id='hindi' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="maths">Maths :-</label>
          <input type="number" id='maths' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="science">Science</label>
          <input type="number" id='science' />
        </div>
        <div className='flex mb-3'>
          <label htmlFor="socialScience">Social Science</label>
          <input type="number" id='socialScience' />
        </div>

        <div className=' mb-3'>
          <button className='flex cursor-pointer bg-green-500 p-2 px-4 rounded-full font-bold'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Insert