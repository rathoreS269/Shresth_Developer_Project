import React from 'react'

function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold
      text-center my-7  '>Create a Listing</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
         <div className='flex flex-col gap-4 flex-1'>
           <input type="text"  placeholder='Name'
            className='border p-3 rounded-lg' id='name'
            maxLength='62' minLength='6' required
            />
           <textarea type="text"  placeholder='description'
            className='border p-3 rounded-lg' id='description'
             required
            />
           <input type="text"  placeholder='address'
            className='border p-3 rounded-lg' id='address'
              required
            />

            <div className='flex gap-6 flex-wrap'>


                <div className='flex gap-2'> 
                <input type="checkbox" id='sale'
                 className='w-5' />
                 <span>sale</span>
                </div>

                <div className='flex gap-2'> 
                <input type="checkbox" id='rent'
                 className='w-5' />
                 <span>Rent</span>
                </div>


                <div className='flex gap-2'> 
                <input type="checkbox" id='parking'
                 className='w-5' />
                 <span>Parking spot</span>
                </div>


                <div className='flex gap-2'> 
                <input type="checkbox" id='furnished'
                 className='w-5' />
                 <span>furnished</span>
                </div>
              
                <div className='flex gap-2'> 
                <input type="checkbox" id='offer'
                 className='w-5' />
                 <span>Offer</span>
                </div>
              

            </div>

            <div className='flex flex-wrap gap-6'>
               <div className='flex items-center gap-2'>
                <input type="number"  id='bedrooms' minLength='1' maxLength='10'
                 required className='p-3 border border-gray-400 rounded-lg'/>
                 <p>Bedrooms</p>
               </div>

               <div className='flex items-center gap-2'>
                <input type="number"  id='bathrooms' minLength='1' maxLength='10'
                 required className='p-3 border border-gray-400 rounded-lg'/>
                 <p>Bathrooms</p>
               </div>

               <div className='flex items-center gap-2'>
                <input type="number"  id='regular'
                 required className='p-3 border border-gray-400 rounded-lg'/>
                 <div className='flex flex-col items-center'>
                 <p>Regular price</p>
                 <span className='text-xs'>( ₹ / month)</span>
                 </div>
                 
               </div>

               <div className='flex items-center gap-2'>
                <input type="number"  id='discount'
                 required className='p-3 border border-gray-400 rounded-lg'/>
                 <div className='flex flex-col items-center'>
                 <p>Discounted price</p>
                 <span className='text-xs'>( ₹ / month)</span>
                 </div>
               </div>

            </div>

          </div>
        
        <div className=' flex flex-col flex-1 gap-4'>
            <p className='font-semibold'>Images:
            <span className='font-normal text-gray-800 ml-2'>The first image will be the cover (max 6)</span>
            </p>
            <div className='flex gap-4 '>

              <input type="file"  id='images'
              accept='image/*' multiple className='p-3 border bg-gray-200 border-gray-500 rounded w-full'/>
              <button className='p-3 bg-green-700 border border-green-800 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
            </div>
            <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
        </div>

        
      </form>
    </main>
  )
}

export default CreateListing