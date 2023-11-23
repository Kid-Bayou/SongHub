import { css } from "@emotion/react";
import { db } from "../config/firebase";
import { getDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const upd_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const upd_form = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  margin-top: 20px;

  &:hover {
    background-color: #d1a6ac;
  }
`;

function UpdateSong() {
  const navigate = useNavigate();
  const params = useParams();

  const [newTitle, setNewTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");

  const update = async () => {
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
      <div css={upd_container}>
        <h1>Update Song</h1>
        <form css={upd_form}>
          <div>
            <label>New Title:</label>
            <input
              type="text"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <label>New Artist:</label>
            <input
              type="text"
              onChange={(e) => setNewArtist(e.target.value)}
            />
          </div>
          <button css={button} onClick={update}>
            Update Song
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateSong;
