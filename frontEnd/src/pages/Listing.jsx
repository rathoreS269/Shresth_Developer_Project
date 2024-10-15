import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

function Listing() {
    SwiperCore.use([Navigation]);
    const params = useParams();
    const[listing, setListing] = useState(null);
    const [loading , setLoading] = useState(false);
    const[error, setError] = useState(false);
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
               <>
               <Swiper navigation>
                 {listing.imageUrls.map((url) =>(
                    <SwiperSlide key={url}>
                       <div
                  className='h-[550px]'
                  style={{
                    background: `url(${url}) center no-repeat`,
                  }}
                  ></div>
                    </SwiperSlide>
                 ))}
               </Swiper>
               </>}
                 
        </main>
  )
}

export default Listing