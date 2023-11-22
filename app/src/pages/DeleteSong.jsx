import { css } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom"

import { db, storage } from "../config/firebase";
import {
  deleteDoc,
  doc,
} from "firebase/firestore";

import {ref, uploadBytes} from "firebase/storage"

const del_container = css `
display: flex;
flex-direction: column;
align-items: center;
`

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

const button_container = css `
display: flex;
gap: 10px;
justify-content: center;
`

function DeleteSong() {

  const params = useParams()
  const navigate = useNavigate()

  
  const deleteSong = async () => {
    const songDoc = doc(db, "songs", params.id);
    await deleteDoc(songDoc);
    navigate("/songs")
  };

  const goBack = async () => {
    navigate("/songs")
  }

  return (
    <>
      <div css={del_container}>
        <h1>Delete Song</h1>
        <p>Are you sure you want to delete this song?</p>
        <div css={button_container}>
          <button css={button} onClick={deleteSong}>Yes</button>
          <button css={button} onClick={goBack}>No</button>
        </div>
      </div>
    </>
  );
}

export default DeleteSong;
