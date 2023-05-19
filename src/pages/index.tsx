import { Inter } from 'next/font/google'
import Navbar from "@/pages/components/navbar";
import Header from './components/header';
import {datalinnks} from "@/pages/components/links"
import Image from 'next/image';
import { Component } from 'react';
import Sidebar from './components/sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className = {`${ inter.className} h-full bg-slate-100`}>
      <Navbar/>
      <div className={`h-full flex bg-no-repeat bg-cover bg-center bg-auto bg-[url('/images/05.jpg')]`}>
        <Sidebar/>
        <Header/>
      </div>

      {/* { datalinnks.map(( item) => (
          <div key={item.id} className={` p-1 m-1 rounded-xl bg-gray-900 text-white shadow-lg h-40 md:h-2/3`}>
            <div>{item.doc}</div>
          </div>
      ))} */}
    </main>
  )
}
