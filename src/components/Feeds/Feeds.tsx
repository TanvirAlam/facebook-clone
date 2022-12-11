import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";

export default function Feeds() {
  return (
    <div className="mr-4 h-screen flex-grow overflow-y-auto pb-44 pt-6 xl:mr-40">
      <div className="mx-auto max-w-md md:max-w-lg">
        <Stories />
        <InputBox />
        {/* posts */}
      </div>
    </div>
  );
}
