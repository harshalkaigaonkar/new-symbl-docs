import Image from 'next/image'

import React from 'react'

const Logo = () => {
  return (
    <>
     <Image src={`${localStorage.getItem('theme') === 'dark' ? "/img/Symbl_Logo_Light.svg" : "/img/Symbl_Logo_Dark.svg"}`} alt="logo" width="180" height="40" priority/>
    </>
  )
}

export default Logo