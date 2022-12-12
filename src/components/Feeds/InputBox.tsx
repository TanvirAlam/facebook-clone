import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef, useState } from "react";

import { BiHappyAlt } from "react-icons/bi";
import { BsCameraReelsFill } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";
import { db, storage } from "../../../firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export default function InputBox() {
  const { data: session } = useSession();
  const [imageToPost, setImageToPost] = useState(null);
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const sendPost = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const dbInstance = collection(db, "posts");
    const newCityRef = doc(collection(db, "posts"));

    if (!inputRef?.current?.value) return;

    addDoc(dbInstance, {
      message: inputRef.current.value,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      timestamp: serverTimestamp(),
    }).then((doc) => {
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${doc.id}`);

        uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setDoc(newCityRef, { postImage: url });
          });
        });

        removeImage();
      }
    });

    inputRef.current.value = "";
  };

  const addImageToPosts = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    const reader = new FileReader();
    const file: File = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onload = (readerEvent: any) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
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
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex transform cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
          >
            <img
              src={imageToPost}
              alt="sampleImage"
              className="h-10 object-contain"
            />
            <p className="text-center text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly border-t p-3">
        <div className="InputIcons">
          <BsCameraReelsFill className="h-7 text-2xl text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef?.current?.click()}
          className="InputIcons"
        >
          <BsFillCameraFill className="h-7 text-2xl text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            hidden
            type="file"
            accept="image/*"
            onChange={addImageToPosts}
          />
        </div>
        <div className="InputIcons">
          <BiHappyAlt className="h-7 text-2xl text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
