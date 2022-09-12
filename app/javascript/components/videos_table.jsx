import React from "react";
import Video from './video';

export default function VideosTable({ videos }) {
  return (
    <>
      {
        videos.length > 0 ? 
        videos.map((vid) => {
          return (
            <Video key={vid.id} video={vid} />
          )
        })
        :
        'No videos'
      }
    </>
  )
}