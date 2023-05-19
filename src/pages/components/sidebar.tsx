import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Sidebar() {
		return (
				<div>
            <aside className={"flex"}>
                <div className={"flex flex-col items-center w-16 md:w-[150px] h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700"}>

                    <Link href="#" className="p-1.5 md:p-5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <Image src="/images/home.png" alt="menu" width="100" height="100" style={{width: 30}}/>
                    </Link>

                    <Link href="/pagecomponents/photos" className="p-1.5 md:p-5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <Image src="/images/gallery.png" alt="menu" width="100" height="100" style={{width: 30}}/>
                    </Link>

                    <Link href="/pagecomponents/vidios" className="p-1.5 md:p-5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <Image src="/images/play.png" alt="menu" width="100" height="100" style={{width: 30}}/>
                    </Link>

                    <Link href="/pagecomponents/information" className="p-1.5 md:p-5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <Image src="/images/information.png" alt="menu" width="100" height="100" style={{width: 30}}/>
                    </Link>
                </div>
            </aside>
		</div>
		);
}

export default Sidebar;