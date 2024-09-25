import result from '@/models/Result';
import ConnectDb from '@/utils/ConnectDb';
import { redirect } from 'next/navigation';
import React from 'react'

const Insert = () => {

  // server action
  const handleInsert = async (formData) => {
    "use server";
    let name = formData.get("name");
    let fatherName = formData.get("fatherName");
    let motherName = formData.get("motherName");
    let schoolName = formData.get("schoolName");
    let address = formData.get("address");
    let english = formData.get("english");
    let hindi = formData.get("hindi");
    let maths = formData.get("maths");
    let science = formData.get("science");
    let socialScience = formData.get("socialScience");

    ConnectDb();

    let newdata = await result.create({name:name,fatherName:fatherName,motherName:motherName,schoolName:schoolName,
      address:address,english:english,hindi:hindi,maths:maths,science:science,socialScience:socialScience,
    })

    redirect("/");
}


  return (
    <form action={handleInsert} method='post' className='flex flex-1 px-5 py-6 bg-white font-serif'>
      <div className='flex flex-col gap-7'>
        <h1 className='flex font-bold text-indigo-600 text-3xl justify-center'>Student's Details</h1>
        <div className='flex gap-4 justify-evenly'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='font-bold'>Name</label>
            <input type="text" id='name' name='name' placeholder='Enter Your Name' className='outline-none h-10 placeholder:text-sm border-2 border-gray-300 px-1 rounded-md' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="fatherName" className='font-bold'>Father's Name</label>
            <input type="text" id='fatherName' name='fatherName' placeholder='Enter Your FathersName' className='h-10 placeholder:text-sm outline-none border-2 border-gray-300 px-1 rounded-md' />
          </div>
        </div>

        <div className='flex gap-4 justify-evenly'>
          <div className='flex flex-col'>
            <label htmlFor="motherName" className='font-bold'>Mother's Name</label>
            <input type="text" id='motherName' name='motherName' placeholder='Enter Your MothersName' className='h-10 placeholder:text-sm outline-none border-2 border-gray-300 px-1 rounded-md' />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="schoolName" className='font-bold'>School's Name</label>
            <input type="text" id='schoolName' name='schoolName' placeholder='Enter Your SchoolName' className='h-10 placeholder:text-sm outline-none border-2 border-gray-300 px-1 rounded-md' />
          </div>
        </div>

        <div className='flex px-9'>
          <div className='flex flex-col'>
            <label htmlFor="address" className='font-bold'>Address</label>
            <input type="text" id='address' name='address' placeholder='Enter Your Address' className='h-10 placeholder:text-sm outline-none border-2 border-gray-300 px-1 rounded-md' />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='flex font-bold text-3xl justify-center text-indigo-600'>Mark's Of Students</h2>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="english" className='font-bold'>English</label>
              <input type="number" id='english' name='english' className='outline-none border-2 w-20 border-gray-300 px-1 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="hindi" className='font-bold'>Hindi</label>
              <input type="number" id='hindi' name='hindi' className='outline-none border-2 w-20 border-gray-300 px-1 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="maths" className='font-bold'>Maths</label>
              <input type="number" id='maths' name='maths' className='outline-none border-2 w-20 border-gray-300 px-1 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="science" className='font-bold'>Science</label>
              <input type="number" id='science' name='science' className='outline-none border-2 w-20 border-gray-300 px-1 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="socialScience" className='font-bold'>Social Science</label>
              <input type="number" id='socialScience' name='socialScience' className='outline-none border-2 w-20 border-gray-300 px-1 rounded-md' />
            </div>
          </div>
        </div>

        <div className='flex'>
          <button className='flex flex-1 justify-center cursor-pointer bg-indigo-500 text-white py-1 text-2xl rounded-full font-bold'>Submit</button>
        </div>

      </div>
    </form>
  )
}

export default Insert