import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type RightSidebarProps = {
  
};

const RightSidebar : React.ElementType = (props : any) => {
 return (
  <>
  {/* Left Sidebar for Home */}
   <aside className='sticky right-0 top-20 py-4 w-[20%] h-full bg-inherit flex flex-col border-l-2 overflow-y-auto'>
     {props.lexer.length ? (
       <>
        <h1 className='px-4 text-xl font-bold'>On This Page</h1>
          <hr className='m-2' />
          <>
            {props.lexer && props.lexer.map((lexer : any, index: number) => {
              const id = lexer.text.toLowerCase().replace(/[^\w]+/g, '-');
              return (
              <React.Fragment key={index}>
                <div className={`mx-2 p-1 px-${lexer.depth} rounded text-sm hover:text-[#0077FF] hover:cursor-pointer active:text-purple-300 ${(window.location.href.includes(id)) ? "text-[#0077FF]" : ""}`}>
                <Link href={'#' + `${id}`} passHref>
                  <a>{lexer.text}</a>
                </Link>
                </div>
              </React.Fragment>
              )
            })}
          </>
       </>
     ) : (null)}
   </aside>
  </>
 );
}


export default RightSidebar;