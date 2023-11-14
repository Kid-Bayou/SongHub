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
gap: 10px;
margin-bottom: 50px;
flex-wrap: wrap;
`

const card = css `
width: 200px;
height: 250px;
background-color: #D1A6AC;
border-radius: 6%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const img = css `
width: 150px;
height: 110px;
background-size: 100%;
margin-bottom: 15px;
`

const card_text = css `
margin: 5px;
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
          <div key={song.id} css={card}>
            <img src={noImage} css={img}/>
            <h3 css={card_text}>{song.name}</h3>
            <h4 css={card_text}>{song.artist}</h4>
          </div>
        ))}
      </div>

      <button css={button}>Add Song</button>
    </>
  );
}

export default Songs;
