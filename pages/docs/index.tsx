import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ExploreOurSections from '../../components/LandingPageComponents/ExploreOurSections';
import WhatsNew from '../../components/LandingPageComponents/WhatsNew';
import Link from 'next/link';
import Footer from '../../components/LandingPageComponents/Footer';

const DocsPage: NextPage = (props: any) => {
 return (
  <>
  <Head>
   <title>Symbl Documentation | Symbl Docs</title>
   <link rel="icon" href="/img/favicon.ico" />
  </Head>

  <div className="flex flex-col scroll-smooth">
    <Header active="Home" />
      <main className='grow flex flex-row'>
        <Sidebar type="Home" pageId="introduction" id="introduction" />
          <article className='top-20 right-20 max-w-[80%] grow flex flex-col'>
            {/* <MainModule /> */}
            <div className='m-4 py-8 px-8 flex flex-row bg-gray-100 dark:bg-gray-800 border-none shadow-xl rounded-xl'>
        <div className="w-[90%] flex flex-col justify-around gap-12">
          <p className='font-bold text-3xl'>Symbl Documentation</p>
          <span>
          <p className="">Whether you&apos;re looking to understand Symbl&apos;s capabilities or get started with our APIs or SDKs, <b className="text-[#0077FF] font-semibold text-xl">we&apos;ve got you covered!</b></p>
          </span>
          <span className='inline-flex flex-row gap-8 text-inherit'>
            <button className="text-medium bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-800 p-3 border-2 rounded-tr-xl rounded-bl-xl hover:shadow-xl">
             <Link href="/stoplightspec">
                <a>Getting Started</a>
              </Link>
            </button>
            <button className="text-medium bg-[#0077FF] p-3 border-2 rounded-tr-xl rounded-bl-xl hover:shadow-xl">
              <Link href="https://platform.symbl.ai/">
                <a className='inline-flex'><p>Free Sign Up</p><span className='inline-flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="m-1 p-px h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg></span></a>
              </Link>
            </button>
          </span>
        </div>

        <div className="w-[480px] inline-flex items-between justify-center">
        <WhatsNew />
        </div>
      </div>
            <div className="p-12 w-fit flex flex-row justify-between">
              <div className='w-full inline-flex flex-col gap-6'>
                <p className="font-semibold text-2xl">What is Symbl ?</p>
                <p className="text-md">
                  Symbl is an AI-powered, API first, Conversation Intelligence platform for 
                  natural human conversations that works on audio, video, and textual content
                  in real-time or recorded files. Symbl&apos;s APIs let you generate real-time
                  Sentiment Analysis, Action Items, Topics, Trackers, Summary and much more 
                  in your applications.
                </p>
                <span className="text-right">  
                  <button className="w-fit p-3 bg-gray-400 dark:bg-gray-800 bg-opacity-50 rounded-tr-xl hover:shadow-xl">
                    <Link href="" passHref>
                      <a>Learn More .</a>
                    </Link>
                  </button>
                </span> 
              </div>
            </div>
            <ExploreOurSections />
          </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </>
 );
}

export default DocsPage;