import Image from 'next/image';
import { useMemo } from 'react';

export default function Header({  }) {
  const photoPath = [
    { id: 0, path: '/photos/05.gpg'},
    { id: 1, path: '/photos/06.gpg'},
    { id: 2, path: '/photos/07.gpg'},
    { id: 3, path: '/photos/08.gpg'},
    { id: 4, path: '/photos/09.gpg'},
    { id: 5, path: '/photos/10.gpg'}
  ]

  
  const photos = useMemo(() => {
    const imagePaths = require.context('/public/photos', false, /\.(jpe?g|png|gif)$/);
    return imagePaths.keys().map((key) => imagePaths(key).default);
  }, []);

  function viewImage() {
    console.log(photos);
    
  }

  return (
      <div className={`flex w-screen`}>
        <div className={`w-full md:w-2/3 overflow-y-scroll`}>
          <div className={` p-1 m-1 rounded-xl md:m-1 md:rounded-xl bg-gray-500 text-white shadow-lg
              h-40 md:h-2/3 flex items-center bg-no-repeat bg-cover bg-center bg-[url('/images/system.jpg')]`}>
              <div className='bg-gray-900 text-white shadow-lg h-10 rounded-xl flex bg-opacity-50 items-center p-3 mx-auto'>
                information
              </div>
          </div>


            {/*slide*/}
            <div className=" relative m-1 rounded-xl overflow-hidden text-white shadow-lg h-40 md:h-2/3">
              <div className="flex duration-700 ease-in-out bg-no-repeat bg-cover bg-center w-full h-full">
                
                  {photos.map((photo, index) => (
                    <Image key={index} src={photo} alt="photo" />
                  ))}
                  <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                      First Slide photos
                  </span>
              </div>

              <div className='absolute flex inset-0 items-center justify-between p-4'>
                <button type="button" className="rounded-xl active:opacity-0 duration-300"
                >
                  <Image src="/images/before.png" alt="left" width="100" height="100" style={{width: 45}} 
                  onClick={viewImage}/>
                </button>
                <button type="button" className="rounded-xl active:opacity-0 duration-300">
                  <Image src="/images/next.png" alt="right" width="100" height="100" style={{width: 45}} />
                </button>
              </div>
            </div>
            {/*slide*/}
            {/*slide*/}
            <div className=" relative m-1 mt-3 rounded-xl overflow-hidden text-white bg-black shadow-lg h-40 md:h-2/3">
              <div className=" duration-700 ease-in-out bg-no-repeat bg-cover bg-center w-full h-full">
                  <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                      First Slide vidios
                  </span>
              </div>
              <div className=" bg-no-repeat bg-cover bg-center bg-[url('/photos/06.jpg')] w-full h-full duration-700 ease-in-out">
              </div>
              <div className=" duration-700 w-full h-full bg-no-repeat bg-cover bg-center bg-[url('/photos/07.jpg')]">
              </div>
              <div className='absolute flex inset-0 items-center justify-between p-4'>
                <button type="button" className="rounded-xl active:opacity-0 duration-300"
                >
                  <Image src="/images/before.png" alt="left" width="100" height="100" style={{width: 45}}
                  onClick={viewImage}/>
                </button>
                <button type="button" className="rounded-xl active:opacity-0 duration-300">
                  <Image src="/images/next.png" alt="right" width="100" height="100" style={{width: 45}} />
                </button>
              </div>
            </div>
            {/*slide*/}

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


