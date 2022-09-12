import React from "react";
import { Player } from 'video-react';

export default function Video({ video }) {
  return (
    <div style={{ height: '256px', width: '256px'}}>
      <Player
        playsInline
        poster={video.file_thumbnail}
        src={video.file}
      />
      <p>Name: <b>{video.name}</b></p>
      <p>Category: <b>{video.video_category?.name}</b></p>
    </div>
  )
}