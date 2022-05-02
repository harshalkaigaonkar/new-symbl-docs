import {Disclosure} from '@headlessui/react';
import Link from 'next/link';


const SimpleSidebarComponent = ({ styles, link, type, activeSidebarComponent, pageId, id }: {styles?: string | undefined, link: string | undefined, type: string | undefined, activeSidebarComponent: string| undefined , pageId: string | string[] , id: string}) => {
 // console.log(activeSidebarComponent, type)
 return (
  <>
  <div className="w-full max-w-md bg-white">
   <Disclosure as="div">
    <Link href={`${link}`} passHref>
     <a>
      <Disclosure.Button className={'flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-[#0077FF] hover:bg-[#0077FF] hover:bg-opacity-10 focus:outline-none focus-visible:ring focus-visible:ring-[#0075FF] focus-visible:ring-opacity-75 ' + `${(pageId.includes(id) || id === pageId) ? "bg-[#0075FF] dark:bg-opacity-30 bg-opacity-20 hover:bg-[#0077FF] hover:bg-opacity-20 " : "bg-gray-400 bg-opacity-10 dark:bg-black "}` + `${styles}`}>
       <span>{type}</span>
      </Disclosure.Button>
     </a>
    </Link>
   </Disclosure>
   </div>
  </>
 );
};

export default SimpleSidebarComponent;