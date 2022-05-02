import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic';
import Header from '../components/Header';

const Stoplight: any = dynamic((): any => import('../components/Stoplight'),{ssr:false}) ;

const stoplightspec = () => {
  return (
    <>
    <Head>
     <title>Stoplight API Spec | Symbl Docs</title>
    </Head>
    <main>
     <Header active="APIs" />
     <Stoplight />
    </main>
    </>
  )
}

export default stoplightspec