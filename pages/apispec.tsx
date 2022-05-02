import Head from 'next/head';
import { RedocStandalone } from 'redoc';

const apispec = () => {
  return (
    <>
    <Head>
     <title>Symbl Docs | API Spec</title>
    </Head>
    
    <main>
     <RedocStandalone specUrl="NewSwaggerFile.yml"/>
    </main>
    </>
  )
}

export default apispec