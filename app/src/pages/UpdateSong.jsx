import { css } from "@emotion/react";
import  { useParams } from "react-router-dom"

import { db, storage } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";

import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setNewTitle, setNewArtist } from "./redux/SongSlice"; 

const update_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const form = css`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
`;

function UpdateSong() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newTitle = useSelector((state) => state.song.title);
  const newArtist = useSelector((state) => state.song.artist);

  const updat = async () => {
    try {
      const songDoc = doc(db, "songs", params.id);
      await updateDoc(songDoc, {
        title: newTitle,
        artist: newArtist,
      });
      navigate("/songs");
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  return (
    <>
      <div css={update_container}>
        <h1>Update Song</h1>
        <div css={form}>
          <div>
            <label>New Title:</label>{" "}
            <input
              type="text"
              value={newTitle}
              onChange={(e) => dispatch(setNewTitle(e.target.value))}
            />
          </div>{" "}
          <div>
            <label>New Artist:</label>{" "}
            <input
              type="text"
              value={newArtist}
              onChange={(e) => dispatch(setNewArtist(e.target.value))}
            />
          </div>
          <button css={button} onClick={updat}>
            Update Song
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdateSong;