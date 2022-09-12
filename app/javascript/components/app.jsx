import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import VideosTable from './videos_table';
import VideoForm from "./video_form";

function App({ cable }) {
  const [videos, setVideos] = useState([])
  const [formOpened, setOpenedForm] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    requestCategories();
    requestVideos();
  }, [])

  const requestVideos = () => {
    httpClient().get('/videos', {})
    .then(res => {
      setVideos(res.data)
    })
  }

  const requestCategories = () => {
    httpClient().get('/video_categories', {})
    .then(res => {
      setCategories(prevCategories => ([...prevCategories, ...res.data]))
    })
  }

  const addVideo = (data) => {
    setVideos([ ...videos, data])
  }

  useEffect(() => {
    cable.subscriptions.create
    (
      {
        channel: 'VideosChannel'
      },
      {
        received: (message) => {
          setVideos(prevState => {
            return prevState.map(obj => {
              if (obj.id === message.id) {
                return {...obj, file_thumbnail: message.file_thumbnail};
              }
              return obj;
            });
          })
        }
      }
    )
  }, [cable.subscriptions])

  return (
    <>
      {
        formOpened ?
        <div>
          <button onClick={() => setOpenedForm(false)}>Close video</button>
          <VideoForm categories={categories} addVideo={addVideo} />
        </div>
        :
        <div>
          <VideosTable videos={videos}/>
          <button onClick={() => setOpenedForm(true)}>Add video</button>
        </div>
      }
    </>
  )
}

export default App