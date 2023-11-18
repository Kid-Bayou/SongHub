import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import { db, storage } from "../config/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import noImage from "../assets/noImage.jpg";

const container = css`
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

const songs_container = css`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

const card = css`
  width: 200px;
  height: 250px;
  background-color: #d1a6ac;
  border-radius: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const img = css`
  width: 150px;
  height: 110px;
  background-size: 100%;
  margin-bottom: 15px;
`;

const card_text = css`
  margin: 5px;
`;

function Songs() {
  const navigate = useNavigate();

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

  const navigatePage = async () => {
    navigate("/addsong");
  };

  useEffect(() => {
    getSongs();
  });

  return (
    <>
      <div css={container}>
        <div css={songs_container}>
          {songs.map((song) => (
            <div key={song.id} css={card}>
              <img src={noImage} css={img} />
              <h3 css={card_text}>{song.title}</h3>
              <h4 css={card_text}>{song.artist}</h4>
            </div>
          ))}
        </div>

        <button onClick={navigatePage} css={button}>
          Add Song
        </button>
      </div>
    </>
  );
}

export default Songs;
