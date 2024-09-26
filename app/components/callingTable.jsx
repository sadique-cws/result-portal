import Result from '@/models/Result';
import ConnectDb from '@/utils/ConnectDb'
import { redirect } from 'next/navigation';



const CallingTable = async () => {

  ConnectDb();
  

  const CallingRecords = await Result.find()
  const handleDelete= async (FormData) =>{
    "use server"
    let id =FormData.get("recordId");

    await Result.findByIdAndDelete(id);
    redirect("/");
}

  return (

    <div className='flex flex-col gap-2 bg-black p-5 font-serif font-bold'>

      {
        CallingRecords.map((record, index) => {

          return (
            <div key={index} className="flex flex-col bg-white p-2  mb-8 ">
              <div>
                <div className='flex flex-1 justify-between'>
                  <h1 className='font-bold'> Student Name: <span className='text-gray-500 ml-2'>{record.name} </span> </h1>
                  <h1 className=''>Session:<span className='text-gray-500 ml-2'>2024-2025</span></h1>
                </div>
                <div className='flex flex-1 justify-between'>
                  <h1> Father's Name:<span className='text-gray-500 ml-2'> {record.fatherName}</span> </h1>
                  <h1>Term:<span className='text-gray-500 ml-2'> First</span></h1>
                </div>
                <div className='flex flex-1 justify-between'>
                  <h1> Father's Name:<span className='text-gray-500 ml-2'> {record.motherName}</span> </h1>
                  <h1>Term:<span className='text-gray-500 ml-2'> First</span></h1>
                </div>
                <div className='flex flex-1 justify-between'>
                  <h1> School name:<span className='text-gray-500 ml-2'> {record.schoolName}</span> </h1>
                  <h1>Position:<span className='text-gray-500 ml-2'> 1st</span></h1>
                </div>
                <div className='flex flex-1 justify-between'>
                  <h1> Address:<span className='text-gray-500 ml-2'> {record.address}</span> </h1>
                  <h1>Grade:<span className='text-gray-500 ml-2'> A</span></h1>
                </div>

                <table className='border w-full'>

                  <thead className=''>
                    <tr className=''>
                      <th className='border-2 border-gray-700 p-3 bg-gray-600 text-white font-serif' scope='col'> S No.</th>
                      <th className='border-2 border-gray-700 p-3 bg-gray-600 text-white font-serif' scope='col'> Subject</th>
                      <th className='border-2 border-gray-700 p-3 bg-gray-600 text-white font-serif' scope='col'> Score</th>
                      <th className='border-2 border-gray-700 p-3 bg-gray-600 text-white' scope='col'>Remarks</th>


                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="border-2 border-gray-700 p-3" scope='row'> 1</th>
                      <th className='border-2 border-gray-700 p-3'>English</th>

                      <td className="border-2 border-gray-700 p-3">{record.english}</td>
                      <td className="border-2 border-gray-700 p-3 text-gray-500">Very Good</td>
                    </tr>

                    <tr>
                      <th className='border-2 border-gray-700 p-3'>2</th>
                      <th className="border-2 border-gray-700 p-3" scope='row'> Hindi</th>

                      <td className="border-2 border-gray-700 p-3">{record.hindi}</td>
                      <td className="border-2 border-gray-700 p-3 text-gray-500">Very Good</td>
                    </tr>

                    <tr>
                      <th className='border-2 border-gray-700 p-3'>3</th>
                      <th className="border-2 border-gray-700 p-3" scope='row'> Mathematics</th>

                      <td className="border-2 border-gray-700 p-3">{record.maths}</td>
                      <td className="border-2 border-gray-700 p-3 text-gray-500">Very Good</td>
                    </tr>

                    <tr>
                      <th className='border-2 border-gray-700 p-3'>4</th>
                      <th className="border-2 border-gray-700 p-3" scope='row'> Science</th>

                      <td className="border-2 border-gray-700 p-3">{record.science}</td>
                      <td className="border-2 border-gray-700 p-3 text-gray-500">Very Good</td>
                    </tr>

                    <tr>
                      <th className='border-2 border-gray-700 p-3'>5</th>
                      <th className="border-2 border-gray-700 p-3" scope='row'> Social Science</th>

                      <td className="border-2 border-gray-700 p-3">{record.socialScience}</td>
                      <td className="border-2 border-gray-700 p-3 text-gray-500">Very Good</td>
                    </tr>

                    <td>
              <form action={handleDelete} method="post " className='mt-5'>
                           <input type="hidden" name='recordId' value={record._id}/>
                           <input type="submit" className='bg-red-500 text-white px-3 py-2 rounded' value="Delete" />
                            </form>
              </td>

                  </tbody>

                </table>
              </div>
            </div>
          )

        })
      }
    </div>

  )
}

export default CallingTable