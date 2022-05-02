import React from 'react'
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
// import Swagger from '../public/NewSwaggerFile.yml';

const Stoplight = () => {
  return (
    <>
     <API
       apiDescriptionUrl="https://raw.githubusercontent.com/symblai/new-symbl-docs/develop/public/test.yaml?token=GHSAT0AAAAAABT2CGT73LZ4E6I4K4GTPYPOYTJL3HQ"
       router="hash"
     />
    </>
  )
}

export default Stoplight