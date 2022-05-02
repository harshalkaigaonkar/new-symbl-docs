import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
     <div className='px-10 py-4 w-full flex flex-col gap-3 bg-gray-300 dark:bg-gray-800 border-t-2'>
      <div className='flex flex-row items-center justify-around'>
        <span className="py-4">
        <p className="text-2xl py-3"><b>Resources</b></p>
         <span>
          <p className="hover:underline">
           <Link href="">
            <a>Platform</a>
           </Link>
          </p>
          <p className="hover:underline">
           <Link href="">
             <a>Blog</a>
           </Link>
          </p>
         </span>
        </span>
        <span>
        <p className="text-2xl py-3"><b>Community</b></p>
         <span className="py-4">
         <p className="hover:underline">
           <Link href="">
            <a>Slack</a>
           </Link>
          </p>
          <p className="hover:underline">
           <Link href="">
             <a>Videos</a>
           </Link>
          </p>
         </span>
        </span>
      </div>
      <hr  />
      <p className='py-3 text-center text-sm'>	&#169; 2022 Symbl.ai All rights reserved.</p>
     </div>
    </>
  )
}

export default Footer