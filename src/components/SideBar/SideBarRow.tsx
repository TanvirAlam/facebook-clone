import Image from "next/image";
import type { SVGProps } from "react";

type Props = {
  src?: string | null | undefined;
  Icon?: SVGProps;
  title: string | null | undefined;
};

export default function SideBarRow({ src, Icon, title }: Props) {
  return (
    <div className="flex cursor-pointer items-center space-x-2 rounded-xl p-4 hover:bg-gray-200">
      {src && (
        <Image
          src={src}
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
      )}

      {Icon && <Icon className="icons h-8 w-8 text-blue-500" />}
      <p className="hidden font-bold sm:inline-flex">{title}</p>
    </div>
  );
}
