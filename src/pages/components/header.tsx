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

            {/*<div className={` p-1 m-1 rounded-xl flex items-center  bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>*/}
            {/*</div>*/}

            <div className=" relative m-1 rounded-xl flex items-center text-white shadow-lg h-40 md:h-2/3">
                    <div id="default-carousel" className="rounded-xl w-full h-full relative group" data-carousel="static">
                        <div className="overflow-hidden rounded-lg w-full h-full">
                            <div className=" duration-700 ease-in-out bg-no-repeat bg-cover bg-center bg-[url('/images/05.jpg')] w-full h-full">
                                <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                                    First Slide sdfwefd wed
                                </span>
                            </div>
                            <div className="hidden bg-no-repeat bg-cover bg-center bg-[url('/images/system.jpg')] duration-700 ease-in-out">
                            </div>
                            <div className="hidden duration-700 ease-in-out">
                            </div>
                        </div>
                        <button type="button" className=" absolute flex px-4 cursor-pointer group focus:outline-none">
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30
                                dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black
                                dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                <span className="hidden">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="hidden  px-4 cursor-pointer group focus:outline-none">
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30
                            dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black
                            dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="hidden">Next</span>
                            </span>
                        </button>
                    </div>
                </div>

            {/* slider */}
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
