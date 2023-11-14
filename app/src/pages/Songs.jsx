import { css } from "@emotion/react";

import { db, storage } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import noImage from "../assets/noImage.jpg"

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

const songs_container = css `
display: flex;
width
`

const card = css `

`

function Songs() {
  const [songs, setSongs] = useState([]);

  const songsCollectionRef = collection(db, "songs");

  const getSongs = async () => {
    try {
      const data = await getDocs(songsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSongs(filteredData);
    } catch {
      console.error(err);
    }
  };

  useEffect(() => {
    getSongs();
  })

  return (
    <>

      <div css={songs_container}>
        {songs.map((song) => (
          <div key={song.id}>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
          </div>
        ))}
      </div>

      <button css={button}>Add Song</button>
    </>
  );
}

export default Songs;
