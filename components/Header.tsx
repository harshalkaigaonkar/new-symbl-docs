import React, {useState, Fragment, useEffect} from 'react';
import { Switch, Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const searchClient = algoliasearch('CSWQS54PSA', 'b1753ac30afcdfa27151da0d70617103');

const Logo: any = dynamic((): any => import('../components/Logo'),{ssr:false}) ;

const Header: React.ElementType = ({active}: {active?: string}) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  },[setTheme])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
 return (
  <>
   <header className={'sticky top-0 w-full min-h-10 max-h-20 z-40 border-b flex flex-row bg-white dark:bg-black'}>
  	<div id="logo" className="inline-flex cursor-pointer p-4">
      <Link href="/docs" passHref>
       <a>
       <Logo />
       </a>
      </Link>
      <span className='inline-flex items-center font-bold text-xl text-[#0075FF]'>
       DOCS
      </span>
    </div>
  	<ul className='inline-flex items-center gap-8 px-16'>
        <li className={"inline-flex items-center font-semibold w-fit h-full text-center pb-1 hover:text-[#0075FF] hover:cursor-pointer " + `${active === "Home" ? "text-[#0075FF] border-b-2 border-b-[#0075FF]" : ""}`}>
         <Link href="/docs/" passHref>
          <a>Home</a>
         </Link>
        </li>
        <li className={"inline-flex items-center font-semibold w-fit h-full text-center pb-1 hover:text-[#0075FF] hover:cursor-pointer " + `${active === "APIs" ? "text-[#0075FF] border-b-2 border-b-[#0075FF]" : ""}`}>
         <Link href="/stoplightspec" passHref>
          <a>APIs</a>
         </Link>
        </li>
        <li className={"inline-flex items-center font-semibold w-fit h-full text-center pb-1 hover:text-[#0075FF] hover:cursor-pointer " + `${active === "SDKs" ? "text-[#0075FF] border-b-2 border-b-[#0075FF]" : ""}`}>
         <Link href="/docs/sdk-intro/" passHref>
          <a>SDKs</a>
         </Link>
        </li>
        <li className={"inline-flex items-center font-semibold w-fit h-full text-center pb-1 hover:text-[#0075FF] hover:cursor-pointer " + `${active === "Tutorials" ? "text-[#0075FF] border-b-2 border-b-[#0075FF]" : ""}`}>
         <Link href="/docs/tutorials/" passHref>
          <a>Tutorials</a>
         </Link>
        </li>
        <li className={"inline-flex items-center font-semibold w-fit h-full text-center pb-1 hover:text-[#0075FF] hover:cursor-pointer " + `${active === "Integrations" ? "text-[#0075FF] border-b-2 border-b-[#0075FF]" : ""}`}>
         <Link href="/docs/integrations/integrations-intro/" passHref>
          <a>Integrations</a>
         </Link>
        </li>
        <li className={"inline-flex items-center font-semibold w-fit h-full text-center pb-1 hover:text-[#0075FF] hover:cursor-pointer " + `${active === "Labs" ? "text-[#0075FF] border-b-2 border-b-[#0075FF]" : ""}`}>
         <Link href="/docs/labs/" passHref>
          <a>Labs</a>
         </Link>
        </li>
      </ul>
			<span>
      <div className="py-8">
      <Switch
        checked={theme === 'dark'}
        onChange={() =>  {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
        className="bg-black dark:bg-white relative inline-flex items-center h-[5px] w-[50px] border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${theme === 'dark' ? 'translate-x-7 ' : 'translate-x-0 '}
            bg-inherit pointer-events-none inline-block h-[22px] w-[22px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
			</span>
      <>
      <div className="my-4">
        <span
          onClick={openModal}
          className=""
          id="search-button"
        >
          <span className='inline-flex items-center'>
				    <button className='mx-11 p-2 w-60 inline-flex items-center flex-row border gap-2 bg-gray-300 dark:bg-gray-800 rounded-tr-lg rounded-bl-lg'><p>Search</p><span className='flex-1'></span><span className='py-1 px-2 font-bold bg-white dark:bg-black border rounded-tr-lg rounded-bl-lg'>/</span></button>
			    </span>
        </span>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-200 bg-opacity-50"
          onClose={closeModal}
        >
          <div className="min-h-screen px-2 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-flex justify-center items-center gap-3 w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-top transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
                
                <div className='w-full'>
                <InstantSearch searchClient={searchClient} indexName="pages">
                    <header className=''>
                      <SearchBox className='m-2 p-2 font-bold text-lg border' submit={(<span className='p-3 border-2 rounded-xl '>🔍</span>)} autoFocus translations={{placeholder:'Search in Docs...'}} />
                    </header> 
                  <span className="h-[50px] overflow-y-auto">
                    <Hits hitComponent={({hit}) => {
                      return (
                      <div key={hit.objectID} className="m-2 p-2 font-semibold text-lg border rounded-lg underline">
                        <a href={hit.href}>{hit.pageName}</a>
                      </div>)
                    }} />
                  </span>
                </InstantSearch>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      </>
      <span className="inline-flex items-center justify-center hover:text-[#0077FF] hover:cursor-pointer">
        <Link href="https://platform.symbl.ai/">
          <a className="inline-flex items-center flex-row gap-2" target="_blank">
            <p>Free Sign Up </p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </Link>
      </span>
   </header>
  </>
 );
}

export default Header;