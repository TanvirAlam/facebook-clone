import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  name: string;
};

export default function Contact({ src, name }: Props) {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center space-x-3 rounded-xl p-2 hover:bg-gray-200">
      <Image
        src={src}
        alt={name}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        className="rounded-full"
      />
      <p className="text-sm font-semibold">{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 animate-bounce rounded-full bg-green-400"></div>
    </div>
  );
}
