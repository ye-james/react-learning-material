import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const vids = videos ? (
    videos.map((video) => {
      return (
        <VideoItem
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      );
    })
  ) : (
    <div>Loading..</div>
  );
  return <div className="ui relaxed divided list">{vids}</div>;
};

export default VideoList;
