import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const CollapsibleSidebarComponent: React.ElementType = (props: any) => {
 return (
  <>
    <div className="w-full max-w-md bg-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-semibold text-left text-[#0075FF] bg-gray-100 dark:bg-black hover:bg-[#0077FF] hover:bg-opacity-10 focus:outline-none focus-visible:ring focus-visible:ring-[#0075FF] focus-visible:ring-opacity-75">
              <span>{props.type}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-[#0075FF]`}
              />
            </Disclosure.Button>
            <>
            <Transition 
              enter="transition duration-195 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {props.children}
            </Transition>
            </>
          </>
        )}
      </Disclosure>
    </div>
  </>
 );
}

export default CollapsibleSidebarComponent;