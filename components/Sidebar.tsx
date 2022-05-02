import React from 'react';
import CollapsibleSidebarComponent from './SidebarComponents/CollapsibleSidebarComponent';
import SimpleSidebarComponent from './SidebarComponents/SimpleSidebarComponent';
import sidebars from '../sidebars';

type SidebarProps = {
  type: string ,
  link: string | undefined,
  activeSidebarComponent: string | undefined,
  pageId: string | string[],
  items: {link: string, type: string}[] | undefined 
};

const Sidebar : React.ElementType = (props : SidebarProps) => {
  const sidebar_object : any = sidebars;
 return (
  <>
  {/* Left Sidebar for Home */}
   <aside className='sticky left-0 top-20 w-[20%] h-[88vh] bg-gray-50 dark:bg-black flex flex-col border-r-2 overflow-y-auto'>
     <>
        { 
          sidebar_object[props.type] 
            && 
          sidebar_object[props.type].map((element : any, index: number) => {
          if(!element.items)
          return (<SimpleSidebarComponent key={index} type={element.type} link={ '/docs/' + `${element.link}`} activeSidebarComponent={props.activeSidebarComponent} pageId={props.pageId} id={element.id} />);
          else 
          return (
            <CollapsibleSidebarComponent key={index} type={element.type}>
              {element.items.map((item: any, index: number) => (
                <span key={index}>
                  <SimpleSidebarComponent styles={"pl-10"} link={ '/docs/' + `${item.link}`} type={item.type} activeSidebarComponent={props.activeSidebarComponent} pageId={props.pageId} id={item.id} />
                </span>
              ))}
            </CollapsibleSidebarComponent>
          )
        })}
       </>
   </aside>
  </>
 );
}


export default Sidebar;