import Image from "next/image";
import React from "react";

import {
  ArrowLeftOnRectangleIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";

import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import HeaderIcon from "./HeaderIcon";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  const loggedInImage = session?.user?.image
    ? session?.user?.image
    : "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png";

  return (
    <div className="br-white shodow-md sticky top-0 z-50 flex items-center p-2 lg:px-5">
      <div className="flex items-center">
        <Image
          src={loggedInImage}
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 pr-2 text-gray-600" />
          <input
            className="ml2 times-center hidden flex-shrink bg-transparent placeholder-gray-500 outline-none md:inline-flex"
            type="text"
            placeholder="Search...."
          />
        </div>
      </div>
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon isActive Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center gap-4 sm:space-x-2">
        <ArrowLeftOnRectangleIcon className="icons" onClick={signOut} />
        <p className="whitespace-nowrap font-semibold">{session?.user?.name}</p>
        <BellIcon className="icons" />
        <ChatBubbleLeftIcon className="icons" />
        <ChevronDownIcon className="icons" />
        <TableCellsIcon className="icons" />
      </div>
    </div>
  );
}
