import Image from 'next/image';   
import React, { useState } from 'react';

function Navbar() {

   const [toggleNav, setToggleNav] = useState(false)
   const toggleHandler = () => {setToggleNav( prev => !prev)}
		return (
		<nav id="header" className={"w-full bg-slate-100 shadow-lg border-b "}>
         <div className={" max-md:w-screen flex items-center justify-between mt-0 px-6 py-2"}>
            <div className={"cursor-pointer md:hidden block border border-sky-600 rounded-full p-2 bg-white"}>
               <Image src="/images/menu.png" alt="menu" width="100" height="100" style={{width: 30}} onClick={toggleHandler} />
            </div>

            <div className={"flex w-full"} id="nav-content">
               <div className='max-md:hidden items-center rounded-lg'>
                  <Image src="/images/system.jpg" alt="menu" width="100" height="100" style={{width: 52}}/>
               </div>

               <div className={"auth flex items-center w-full md:w-full m-0 justify-end"}>
                  <button className={"bg-blue-600 text-gray-200  p-2 rounded-full  hover:bg-blue-500 hover:text-gray-100 flex"}>
                     <span className='mr-2 max-md:hidden'>send message</span>
                     <Image src="/images/sms.png" alt="menu" width="100" height="100" style={{width: 27}}/>
                  </button>
               </div>
            </div>
         </div>

         <div className={"md:items-center md:w-auto md:order-1 order-3"} id="menu">
               <ul className={` ${toggleNav ? '' : 'hidden'} bg-slate-900 duration-3000 md:flex items-center text-blue-600 p-2 md:pa-2`}>
                  <li>
                     <button className='rounded-lg outline outline-1 flex px-1 ml-auto'>
                        <a className={"inline-block no-underline hover:text-white duration-300 font-medium p-1 lg:-ml-2"} href="">Phone</a>
                        <Image src="/images/telephone-call.png" alt="menu" width="100" height="100" style={{width: 20}} className="m-auto"/>
                     </button>
                  </li>
                  <li className='md:mx-3'>
                     <button className='my-2 rounded-lg outline outline-1 flex px-1 ml-auto'>
                        <a className={"inline-block no-underline hover:text-white duration-300 font-medium p-1 lg:-ml-2"} href="https://t.me/Boburs_project">Telegram</a>
                        <Image src="/images/telegram.png" alt="menu" width="100" height="100" style={{width: 20}} className="m-auto"/>
                     </button>
                  </li>
                  <li>
                     <button className='rounded-lg outline outline-1 flex px-1 ml-auto'>
                        <a className={"inline-block no-underline hover:text-white duration-300 font-medium p-1 lg:-ml-2"} href="https://www.instagram.com/boburs_project/">Instagram</a>
                        <Image src="/images/instagram.png" alt="menu" width="100" height="100" style={{width: 20}} className="m-auto"/>
                     </button>
                  </li>
               </ul>
         </div>
      </nav>
		);
}

export default Navbar;
