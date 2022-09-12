import React, { useState } from "react";
import httpClient from "../httpClient";

export default function VideoForm({ addVideo, categories }) {
  const [data, setData] = useState({
    name: '',
    file: null,
    video_category_id: categories[0]?.id
  })

  const changeFileHandler = (event) => {
    setData({ ...data, file: event.target.files[0] });
  };

  const saveVideo = (e) => {
    e.preventDefault();
    let valid = validate()
    if (valid) {
      var formData = new FormData();
      formData.append('video[name]', data.name)
      formData.append('video[file]', data.file)
      formData.append('video[video_category_id]', data.video_category_id)

      httpClient().post('/video',formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then( res => {
        addVideo(res.data)
      })
      .catch( err => {
        console.log("ERROR")
        console.log(err)
      })
    } else {
      window.alert('not valid form')
    }
  }

  const validate = () => {
    let valid = Object.values(data).every(x => x !== null);
    return valid
  }

  return (
    <div>
      <input type="text" onChange={e => setData({ ...data, name: e.target.value })}/>
      <label htmlFor="contained-button-file">
        <input type="file" onChange={changeFileHandler} accept="video/*"/>
      </label>
      <select
        onChange={(e) => setData({ ...data, video_category_id: e.target.value })} value={data.video_category_id}>
        {
          categories.map(function(cat) {
            return (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            );
          })
        }
      </select>
      <button onClick={saveVideo}> upload </button>
    </div>
  )
}
