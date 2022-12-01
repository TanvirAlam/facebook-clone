import Image from 'next/image'
import React from 'react'

import { BellIcon, ChatBubbleLeftIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, TableCellsIcon } from '@heroicons/react/24/solid'

import { FlagIcon, PlayIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

export default function Header({}: Props) {
  return (
    <div>
        <div className="flex items-center">
            <Image 
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" 
                alt="logo" 
                width={40} 
                height={40} 
                layout="fixed" 
            />
            <div className="flex">
                <MagnifyingGlassIcon className="h-6" />
                <input type="text" placeholder="Search...." />
            </div>
        </div>
        <div>Middle</div>
        <div>Right</div>
    </div>
  )
}


