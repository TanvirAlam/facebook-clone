import { useSession } from "next-auth/react";

import {
  ChevronDownIcon,
  UserGroupIcon,
  UserIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

import {
  ClockIcon,
  CalendarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import SideBarRow from "./SideBarRow";

export default function SideBar() {
  const { data: session, status } = useSession();

  return (
    <div className="mt-5 max-w-[600px] p-2 xl:min-w-[300px]">
      <SideBarRow src={session?.user?.image} title={session?.user?.name} />
      <SideBarRow Icon={UserIcon} title="Friends" />
      <SideBarRow Icon={UserGroupIcon} title="Groups" />
      <SideBarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SideBarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SideBarRow Icon={CalendarIcon} title="Events" />
      <SideBarRow Icon={ClockIcon} title="Memories" />
      <SideBarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}
