import { css } from "@emotion/react";
import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function AddSongs() {
  const [songUpload, setSongUpload] = useState(null);

  const uploadSong = () => {
    if (songUpload == null) return;

    const songRef = ref(storage, `songs/${songUpload.name + v4()}`);
    uploadBytes(songRef, songUpload).then(() => {
      alert("Song Uploaded");
    });
  };

  return (
    <>
      <h1>Add Songs</h1>
      <input
        type="file"
        onChange={(event) => {
          setSongUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadSong}>Upload Song</button>
    </>
  );
}

export default AddSongs;
