import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function header() {
  return (
      <div className={`w-screen flex`}>

        <div className={`w-full overflow-y-scroll`}>
          <div className={` p-1 m-1 rounded-xl md:m-1 md:rounded-xl bg-gray-500 text-white shadow-lg
              h-40 md:h-2/3 flex items-center bg-no-repeat bg-cover bg-center bg-[url('/images/system.jpg')]`}>
              <div className='bg-gray-900 text-white shadow-lg h-10 rounded-xl flex bg-opacity-50 items-center p-3 mx-auto'>
                this is good design
              </div>
          </div>

          {/* <div className={`rounded-xl p-1 m-1 bg-gray-900 text-white shadow-lg h-40 md:h-2/3
              reliative w-screen`}>
            <Swiper className=''>
              <SwiperSlide className='bg-gray-500'>
                erfewrfew11
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div className={`p-1 m-1 rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <Swiper className='m-0'>
              <SwiperSlide className='m-0'>
                <div>photos</div>
              </SwiperSlide>
              <SwiperSlide className='m-0'>
                <div>photos2</div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={` p-1 m-1 rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div>videos</div>
          </div>
          <div className={`md:hidden  p-1 m-1 rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div>location</div>
          </div>
          <div className={`md:hidden  p-1 m-1 rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div>information</div>
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
