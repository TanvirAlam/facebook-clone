import { useSession } from "next-auth/react";
import Image from "next/image";

import { BiHappyAlt } from "react-icons/bi";
import { BsCameraReelsFill } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";

export default function InputBox() {
  const { data: session } = useSession();

  const sendPost = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("send");
  };

  return (
    <div className="shodow-md mt-6 rounded-2xl bg-white p-2 font-medium text-gray-500">
      <div className="flex items-center space-x-4 p-4">
        <Image
          src={session?.user?.image}
          alt="logo"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            type="text"
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:outline-none"
            placeholder={`What is on your mind, ${session?.user?.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly border-t p-3">
        <div className="InputIcons">
          <BsCameraReelsFill className="h-7 text-2xl text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="InputIcons">
          <BsFillCameraFill className="h-7 text-2xl text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="InputIcons">
          <BiHappyAlt className="h-7 text-2xl text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
