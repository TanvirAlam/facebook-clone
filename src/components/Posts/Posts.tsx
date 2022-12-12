import { collection } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../../../firebase";
import Post from "./Post";

export default function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    collection(db, "posts"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      {/* when get data from getServerProps iterate that instead of  realtimePosts */}
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
          loading={loading}
        />
      ))}
    </div>
  );
}
