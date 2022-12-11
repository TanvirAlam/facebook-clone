import React from "react";

import { stories } from "../../utils/data-stories";
import StoryCard from "./StoryCard";

export default function Stories() {
  return (
    <div className="mx-auto flex justify-center space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}
