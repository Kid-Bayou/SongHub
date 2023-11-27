import { css } from "@emotion/react";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { db, storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc, doc } from "firebase/firestore";

const add_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ... (imports remain the same)

function AddSong() {
  const navigate = useNavigate();

  const [songUpload, setSongUpload] = useState(null);
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");

  const songCollectionRef = collection(db, "songs");

  const uploadSong = () => {
    if (songUpload == null) return;

    const songRef = ref(storage, `songs/${songUpload.name + v4()}`);
    uploadBytes(songRef, songUpload).then(() => {
      alert("Song Uploaded");
    });
  };

  const onSubmitSong = async () => {
    try {
      await addDoc(songCollectionRef, {
        title: songTitle,
        artist: artist,
      });
      navigate("/songs");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div css={add_container}>
        <h1>Add Song</h1>
        <form>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={songTitle}
              onChange={(event) => setSongTitle(event.target.value)}
            />
          </div>
          <div>
            <label>Artist:</label>
            <input
              type="text"
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
            />
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

          <button type="button" onClick={uploadSong}>
            Upload Song
          </button>
          <button type="button" onClick={onSubmitSong}>
            Submit Song
          </button>
        </form>
      </div>
    </>
  );
}

export default AddSong;
