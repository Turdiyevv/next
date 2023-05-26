import Image from 'next/image';
import { useMemo } from 'react';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



export default function Header({  }) {

  const photoPath = useMemo(() => {
    return [
      { id: 0, path: '/photos/05.jpg'},
      { id: 1, path: '/photos/06.jpg'},
      { id: 2, path: '/photos/07.jpg'},
      { id: 3, path: '/photos/08.jpg'},
      { id: 4, path: '/photos/09.jpg'},
      { id: 5, path: '/photos/10.jpg'}
    ];
  }, []);


  return (
      <div className={`flex w-screen overflow-hidden`}>
        <div className={`w-full md:w-2/3 overflow-y-scroll`}>
          <div className={` p-1 m-1 rounded-xl md:m-1 md:rounded-xl bg-gray-500 text-white shadow-lg
              h-40 md:h-2/3 flex items-center bg-no-repeat bg-cover bg-center bg-[url('/images/system.jpg')]`}>
              <div className='bg-gray-900 text-white shadow-lg h-10 rounded-xl flex bg-opacity-50 items-center p-3 mx-auto'>
                information
              </div>
          </div>

          <div className="p-1 m-1 md:m-1 h-40 md:h-2/3">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-xl" effect='cube'>
                  {photoPath.map((item) => (
                      <SwiperSlide key={item.id} className="">
                        <Image alt="photo" src={item.path} width="100" height="100" className=''/>
                      </SwiperSlide>
                  ))}
            </Swiper>
          </div>

            <div className="p-1 m-1 md:m-1 h-40 md:h-2/3">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-xl w-full h-full" effect='cube'>
              <SwiperSlide className="bg-black">
              </SwiperSlide>
              <SwiperSlide className="bg-red-950">
              </SwiperSlide>
              <SwiperSlide className="bg-blue-900">
              </SwiperSlide>
              <SwiperSlide className="bg-gray-900">
              </SwiperSlide>
              <SwiperSlide className="bg-green-950">
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={` p-1 m-1 relative rounded-xl text-white shadow-lg h-40 md:h-2/3`}>
            <div className='w-full h-full rounded-2xl bg-center bg-gray-500'>
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


