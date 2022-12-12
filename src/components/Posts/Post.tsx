import Image from "next/image";
import React from "react";
import PostFooter from "./PostFooter";

type Props = {
  name: string;
  message: string;
  email: string;
  timestamp: string;
  image: string;
  postImage: string;
  loading: boolean;
};

export default function Post({
  name,
  message,
  email,
  timestamp,
  image,
  postImage,
  loading,
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-3xl bg-white p-5 shadow-xl">
        <div className="flex items-center space-x-2">
          {loading ? (
            "Loading ..."
          ) : (
            <>
              {image && (
                <Image
                  src={image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="user logo"
                />
              )}
              <div>
                <p className="font-medium">{name}</p>
                <p>
                  {timestamp && new Date(timestamp?.toDate()).toLocaleString()}
                </p>
              </div>
            </>
          )}
        </div>
        <p className="pt-4">{message}</p>
        {postImage && (
          <div className="relative h-56 bg-white md:h-96">
            <Image
              src={postImage}
              objectFit="cover"
              layout="fill"
              alt="cover"
            />
          </div>
        )}
      </div>
      <PostFooter />
    </div>
  );
}
