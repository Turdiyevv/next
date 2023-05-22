import React from 'react'
// import "swiper/css/navigation";
// import 'swiper/css';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import Image from 'next/image';


export default function header() {
  return (
      <div className={`flex w-screen`}>

        <div className={`w-full md:w-2/3 overflow-y-scroll`}>
          <div className={` p-1 m-1 rounded-xl md:m-1 md:rounded-xl bg-gray-500 text-white shadow-lg
              h-40 md:h-2/3 flex items-center bg-no-repeat bg-cover bg-center bg-[url('/images/system.jpg')]`}>
              <div className='bg-gray-900 text-white shadow-lg h-10 rounded-xl flex bg-opacity-50 items-center p-3 mx-auto'>
                information
              </div>
          </div>
            {/* slider */}
            {/* slider */}
          <div className={` p-1 m-1 rounded-xl flex items-center  bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div className='bg-gray-900 text-white shadow-lg h-10 rounded-xl flex bg-opacity-50 items-center p-3 mx-auto'>
                photos
              </div>
          </div>
          <div className={` p-1 m-1 flex items-center rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div className='bg-gray-900 text-white shadow-lg h-10 rounded-xl flex bg-opacity-50 items-center p-3 mx-auto'>
                videos
              </div>
          </div>
          <div className={`md:hidden  p-1 m-1 flex items-center rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div className='mx-auto'>location</div>
          </div>
        </div>

        <div className='max-md:hidden md:w-1/3'>
          <div className={`p-1 mt-1 rounded-xl bg-gray-900 text-white shadow-lg h-2/4`}>
            location
          </div>
          <div className={`p-1 mt-1 rounded-xl bg-gray-900 text-white shadow-lg h-2/4`}>
            information
          </div>
        </div>
    </div>
  )
}
