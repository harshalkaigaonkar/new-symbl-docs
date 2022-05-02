import Link from 'next/link'
import React from 'react'

const WhatsNew = () => {
  return (
    <>
      <div className="px-8 ml-5 flex flex-col gap-4 border-l-2">
        <p>What&apos;s New ? / Changelog</p>
          <span className='inline-flex flex-col gap-2'>
            <Link href="" passHref>
              <a className='px-8 py-2 text-sm inline-flex flex-row justify-between bg-gray-200 dark:bg-black rounded-bl-2xl hover:text-[#0077FF]'>
                <p>12 Apr 2022</p>
                <p className="font-bold text-[#0077FF]">SDK</p>
              </a>
            </Link>
            <Link href="" passHref>
              <a className='px-8 py-2 text-sm inline-flex flex-row justify-between bg-gray-200 dark:bg-black rounded-bl-2xl hover:text-[#0077FF]'>
                <p>14 Mar 2022</p>
                <p className="font-bold text-[#0077FF]">API</p>
              </a>
            </Link>
            <Link href="" passHref>
              <a className='px-8 py-2 text-sm inline-flex flex-row justify-between bg-gray-200 dark:bg-black rounded-bl-2xl hover:text-[#0077FF]'>
                <p>8 Feb 2022</p>
                <p className="font-bold text-[#0077FF]">API</p>
              </a>
            </Link>
          </span>
          <button className='p-3 font-bold bg-gray-200 dark:bg-black rounded-tr-xl rounded-bl-xl hover:shadow-xl border'>
            <Link href="/docs/changelog" passHref>
              <a>
                <p>See More.</p>
              </a>
            </Link>
          </button>
        </div>
    </>
  )
}

export default WhatsNew