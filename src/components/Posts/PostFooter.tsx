import React from "react";

import {
  BsFillChatDotsFill,
  BsFillShareFill,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";

export default function PostFooter() {
  return (
    <div className="text0gray-400 flex items-center justify-between rounded-b-2xl border-t bg-white shadow-md">
      <div className="InputIcons rounded-none">
        <BsFillChatDotsFill className="text-xl" />
      </div>
      <div className="InputIcons rounded-none">
        <BsFillShareFill className="text-xl" />
      </div>
      <div className="InputIcons flex space-x-2 rounded-none">
        <BsFillHandThumbsUpFill className="text-xl" />
        <BsFillHandThumbsDownFill className="text-xl" />
      </div>
    </div>
  );
}
