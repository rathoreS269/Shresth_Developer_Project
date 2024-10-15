import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {   
    FaBath,
    FaBed,
    FaChair,
    FaMapMarkedAlt,
    FaMapMarkerAlt,
    FaParking,
    FaShare, 
} from 'react-icons/fa';

function Listing() {
    SwiperCore.use([Navigation]);
    const params = useParams();
    const[listing, setListing] = useState(null);
    const [loading , setLoading] = useState(false);
    const[error, setError] = useState(false);
    const [copied, setCopied] = useState(false);
    //console.log(listing);
    useEffect(() => {
      const fetchlisting = async() =>{
        try {
            setLoading(true)
            const res = await fetch(`/api/listing/get/${params.listingId}`);
            const data = await res.json();
            if(data.success === false){
                setError(true)
                setLoading(false)
                return;
            }
         setListing(data);
         setLoading(false);
         setError(false);
        } catch (error) {
            setError(true);
        }
        
      };
    
     fetchlisting();
    }, [params.listingId]);
    
  return (
    <main>
        {loading && <p className='text-center my-7 text-2xl'>
           loading...
           
        </p>}
         {error && <p className='text-center my-7 text-2xl'>
            Something went wrong!</p>}

            {listing && !loading && !error &&
               <div>
               <Swiper navigation>
                 {listing.imageUrls.map((url) =>(
                    <SwiperSlide key={url}>
                       <div
                  className="relative w-full"
                  style={{
                    paddingTop: '56.25%', // This creates a responsive 16:9 aspect ratio (can be adjusted)
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: 'cover',
                    imageRendering: 'auto',
                  }}
                  ></div>
                    </SwiperSlide>
                 ))}
               </Swiper>
              
               <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
               <p className='text-2xl font-semibold'>
              {listing.name} - {' '}
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
                : listing.regularPrice.toLocaleString('en-IN' , { style: 'currency', currency: 'INR' })}
              {listing.type === 'rent' && ' / month'}
            </p>

            <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
              <FaMapMarkerAlt className='text-green-700' />
              {listing.address}
            </p>
            <div className='flex gap-4'>
              <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
              </p>
              {listing.offer && (
                <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                 ₹ {+listing.regularPrice - +listing.discountPrice}
                </p>
              )}
            </div>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Description - </span>
              {listing.description}
            </p>
            <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaBed className='text-lg' />
                {listing.bedRooms > 1
                  ? `${listing.bedRooms} beds `
                  : `${listing.bedRooms} bed `}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaBath className='text-lg' />
                {listing.bathRooms > 1
                  ? `${listing.bathRooms} baths `
                  : `${listing.bathRooms} bath `}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaParking className='text-lg' />
                {listing.parking ? 'Parking spot' : 'No Parking'}
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                <FaChair className='text-lg' />
                {listing.furnished ? 'Furnished' : 'Unfurnished'}
              </li>
            </ul>
            </div>
            </div>
            }
                 
        </main>
  )
}

export default Listing