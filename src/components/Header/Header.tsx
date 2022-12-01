import Image from 'next/image'
import React from 'react'

import { BellIcon, ChatBubbleLeftIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, TableCellsIcon } from '@heroicons/react/24/solid'

import { FlagIcon, PlayIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

import HeaderIcon from './HeaderIcon'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

export default function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 br-white flex items-center p-2 lg:px-5 shodow-md">
        <div className="flex items-center">
            <Image 
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" 
                alt="logo" 
                width={40} 
                height={40} 
                layout="fixed" 
            />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <MagnifyingGlassIcon className="h-6 text-gray-600 pr-2" />
                <input className="hidden md:inline-flex flex ml2 times-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search...." />
            </div>
        </div>
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon isActive Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
          </div>
        </div>
        <div className="flex intems-center sm:space-x-2">
          {/* <Iamge /> */}
          <p className="font-semibold whitespace-nowrap">Tavnir Alam</p>
          <BellIcon className="icons" />
          <ChatBubbleLeftIcon className="icons" />
          <ChevronDownIcon className="icons" />
          <TableCellsIcon className="icons" />
        </div>
    </div>
  )
}


