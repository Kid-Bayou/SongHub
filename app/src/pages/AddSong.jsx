import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db, storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setNewTitle, setNewArtist } from "./redux/SongSlice";

import loading from "../assets/loading.png";

const add_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const add_form = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`;
const input_container = css`
  display: flex;
  gap: 10px;
  justify-content: space-around;
`;
const label = css`
  font-size: 1.3rem;
  color: #422226;
`;
const input_box = css`
  border: solid 1px #422226;
  border-radius: 5px;
  height: 30px;
`;
const input_file = css``;

const button = css`
  background-color: #422226;
  color: #f6edef;
  font-size: 1rem;
  cursor: pointer;
  border: solid #422226 2px;
  border-radius: 20px;
  width: 100px;
  height: 50px;

  &:hover {
    background-color: #d1a6ac;
  }
`;

const loading_img = css`
  position: fixed;
  top: 30%;
  left: 40%;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

function AddSong() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [songUpload, setSongUpload] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const songTitle = useSelector((state) => state.song.title);
  const artist = useSelector((state) => state.song.artist);

  const songCollectionRef = collection(db, "songs");

  const uploadSong = async () => {
    console.log("here");
    if (!songTitle || !artist || !songUpload || !imageUpload) {
      alert("Please fill in all fields before uploading the song.");
      return;
    }

    const songRef = ref(storage, `songs/${songUpload.name}-${v4()}`);
    const imageRef = ref(storage, `images/${imageUpload.name}-${v4()}`);

    try {
      setIsLoading(true);

      const uploadTask = uploadBytes(songRef, songUpload);
      const uploadTask2 = uploadBytes(imageRef, imageUpload);
      console.log("here3");

      await uploadTask;
      await uploadTask2;

      const downloadURL = await getDownloadURL(songRef);
      const downloadURL2 = await getDownloadURL(imageRef);
      console.log("here4", downloadURL);

      try {
        const docRef = await addDoc(songCollectionRef, {
          title: songTitle,
          artist: artist,
          file_path: downloadURL,
          img_path: downloadURL2,
        });
        console.log("Song Uploaded:", docRef.id);
        alert("Song Uploaded!");
        navigate("/songs");

        dispatch(setNewTitle(""));
        dispatch(setNewArtist(""));
        setSongUpload(null);
        setImageUpload(null);
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div css={add_container}>
        <h1>Add Song</h1>
        <form css={add_form}>
          <div css={input_container}>
            <label css={label}>Title:</label>
            <input
              css={input_box}
              type="text"
              value={songTitle}
              onChange={(event) => dispatch(setNewTitle(event.target.value))}
            />
          </div>
          <div css={input_container}>
            <label css={label}>Artist:</label>
            <input
              css={input_box}
              type="text"
              value={artist}
              onChange={(event) => dispatch(setNewArtist(event.target.value))}
            />
          </div>
          <div css={input_container}>
            <label css={label}>Song:</label>
            <input
              type="file"
              onChange={(event) => {
                setSongUpload(event.target.files[0]);
              }}
            />
          </div>
          <div css={input_container}>
            <label css={label}>Image:</label>
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>

          <button
            type="button"
            onClick={uploadSong}
            css={button}
            disabled={isLoading}
          >
            Upload Song
          </button>
          {isLoading ? (
            <img src={loading} alt="Loading" css={loading_img} />
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}

export default AddSong;
