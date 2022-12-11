import Image from "next/image";

type Props = {
  name: string;
  src: string;
  profile: string;
};

export default function StoryCard({ name, src, profile }: Props) {
  return (
    <div className="overflow-x relative h-14 w-14 cursor-pointer p-3 md:h-20 md:w-20 lg:h-56 lg:w-32">
      <Image
        className="absolute top-2 z-50 rounded-full opacity-0 lg:opacity-100"
        src={profile}
        width={40}
        height={40}
        alt={name}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="rounded-full object-cover brightness-75 filter lg:rounded-3xl"
        src={src}
        layout="fill"
        alt={name}
      />
      <p className="absolute bottom-4 w-5/6 truncate text-sm font-bold text-white opacity-0 lg:opacity-100">
        {name}
      </p>
    </div>
  );
}
