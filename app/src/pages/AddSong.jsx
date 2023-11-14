import { css } from "@emotion/react";

import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const add_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function AddSong() {
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
      <div css={add_container}>
        <h1>Add Song</h1>
        <form>
          <div>
            <label>Title:</label>
            <input type="text" />
          </div>
          <div>
            <label>Artist:</label>
            <input type="text" />
          </div>
          <div>
            <label>Song:</label>
            <input
              type="file"
              onChange={(event) => {
                setSongUpload(event.target.files[0]);
              }}
            />
          </div>

          <button onClick={uploadSong}>Upload Song</button>
        </form>
      </div>
    </>
  );
}

export default AddSong;
