import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db, storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";

const add_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function AddSong() {
  const navigate = useNavigate();

  const [songUpload, setSongUpload] = useState(null);
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");

  const songCollectionRef = collection(db, "songs");

  const uploadSong = async () => {
    console.log("here");
    if (!songUpload) return;

    const songRef = ref(storage, `songs/${songUpload.name}-${v4()}`);

    try {
      const uploadTask = uploadBytes(songRef, songUpload);
      console.log("here3");

      await uploadTask;

      const downloadURL = await getDownloadURL(songRef);
      console.log("here4", downloadURL);

      try {
        const docRef = await addDoc(songCollectionRef, {
          title: songTitle,
          artist: artist,
          file_path: downloadURL, 
        });
        console.log("Song Uploaded:", docRef.id);
        alert("Song Uploaded!");
        navigate("/songs");

        setSongTitle("");
        setArtist("");
        setSongUpload(null);
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
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
            Upload and Submit Song
          </button>
        </form>
      </div>
    </>
  );
}

export default AddSong;
