import React from 'react'
import Link from 'next/link'

export default function information() {
  return (
    <div>
      <Link href={`../`}>
          <button className={"bg-blue-600 text-gray-200  p-2 rounded-full  hover:bg-blue-500 hover:text-gray-100 flex"}>
            <span className=''>go to home</span>
          </button>
        </Link>
        <div>information</div>
    </div>
  )
}
