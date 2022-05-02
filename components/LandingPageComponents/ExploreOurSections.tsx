import Link from 'next/link'
import React from 'react'

// const ExploreOurSections = ({tailwindcss, data}: {tailwindcss: string, data: object[]}) => {
//   return (
//     <div>ExploreOurSections</div>
//   )
// }

const ExploreOurSections = () => {
  return (
    <div>
      <div>
        <p className="font-semibold m-2 py-2 px-10 text-2xl">Explore our APIs</p>
      </div>
      <div className='flex flex-row justify-center gap-3'>
        <div className="flex flex-col items-between bg-gray-300 dark:bg-gray-800 m-4 p-4 w-80 rounded-tr-xl rounded-bl-xl">
          <p className="font-semibold text-xl text-[#0077FF]">Streaming APIs</p>
          <p className="my-8">allow you to connect Symbl on a live call via WebSocket protocol.</p>
          <button className="inline-flex p-2 mt-6 w-fit hover:shadow-xl text-white bg-[#0077FF] rounded-tr-xl">
            <Link href="/docs/streamingapi/introduction">
              <a>Read more.</a>
            </Link>
          </button>
        </div>
        <div className="flex flex-col items-between bg-gray-300 dark:bg-gray-800 m-4 p-4 w-80 rounded-tr-xl rounded-bl-xl">
          <p className="font-semibold text-xl text-[#0077FF]">Async APIs</p>
          <p className="my-8">allow you to send text, audio or video conversations in recorded format.</p>
          <button className="inline-flex p-2 w-fit hover:shadow-xl text-white bg-[#0077FF] rounded-tr-xl">
            <Link href="/docs/async-api/introduction">
              <a>Read more.</a>
            </Link>
          </button>
        </div>
        <div className="flex flex-col items-between bg-gray-300 dark:bg-gray-800 m-4 p-4 w-80 rounded-tr-xl rounded-bl-xl">
          <p className="font-semibold text-xl text-[#0077FF]">Telephony APIs</p>
          <p className="my-8">allow you to connect Symbl on an live audio conversation via SIP and PSTN.</p>
          <button className="inline-flex p-2 w-fit hover:shadow-xl text-white bg-[#0077FF] rounded-tr-xl">
            <Link href="/docs/telephony/introduction">
              <a>Read more.</a>
            </Link>
          </button>
        </div>
        
      </div>
      <div className='flex flex-row justify-center gap-3'>
        <div className="flex flex-col items-between bg-gray-300 dark:bg-gray-800 m-4 p-4 w-80 rounded-tr-xl rounded-bl-xl">
          <p className="font-semibold text-xl text-[#0077FF]">Conversation APIs</p>
          <p className="my-8">allows you to get Conversation Intelligence like Sentiment analysis, action Items and more .</p>
          <button className="inline-flex p-2 w-fit hover:shadow-xl text-white bg-[#0077FF] rounded-tr-xl">
            <Link href="/docs/conversation-api/introduction">
              <a>Read more.</a>
            </Link>
          </button>
        </div>
        <div className="flex flex-col items-between bg-gray-300 dark:bg-gray-800 m-4 p-4 w-80 rounded-tr-xl rounded-bl-xl">
          <p className="font-semibold text-xl text-[#0077FF]">Experience APIs</p>
          <p className="my-8">Allows You to Experience  summaries , analytics and Trackers Through UI.</p>
          <button className="inline-flex p-2 w-fit hover:shadow-xl text-white bg-[#0077FF] rounded-tr-xl">
            <Link href="/docs/api-reference/experience-api/post-text-summary-ui">
              <a>Read more.</a>
            </Link>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center text-2xl text-[#0077FF] font-bold bg-gray-300 dark:bg-gray-800 m-4 p-4 w-80 rounded-tr-xl rounded-bl-xl">
          <Link href="/docs/api-reference/getting-started">
            <a>More...</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExploreOurSections