import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import { db } from "../config/firebase";
import { useEffect } from "react";
import { getDocs, collection, doc } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { setSongs } from "./redux/SongsSlice"

import noImage from "../assets/noImage.jpg";
import del from "../assets/delete.png";
import edit from "../assets/edit.png";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
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
  gap: 25px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

const card = css`
  width: 210px;
  height: 270px;
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

const card_icons = css`
  height: 35px;
  cursor: pointer;
`;

const card_icons_container = css`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  width: 100%;
`;

function Songs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list || []);
  const songsCollectionRef = collection(db, "songs");

  const getSongs = async () => {
    try {
      const data = await getDocs(songsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      dispatch(setSongs(filteredData));
    } catch (error) {
      console.error(error);
  
      if (error.code === "resource-exhausted") {
        console.error("Error.");
      }
    }
  };

  const navigatePage = () => {
    navigate("/addsong");
  };

  useEffect(() => {
    getSongs();
  }, [dispatch]);

  const update = (id) => {
    navigate(`/updatesong/${id}`);
  };

  const delet = (id) => {
    navigate(`/deletesong/${id}`);
  };

  console.log("Redux State:", songs);

  return (
    <>
      <div css={container}>
        <button onClick={navigatePage} css={button}>
          Add Song
        </button>
        <div css={songs_container}>
          {songs.map((song) => (
            <div key={song.id} css={card}>
              <img src={song.img_path || noImage} css={img} alt={`Cover for ${song.title}`} />
              <h3 css={card_text}>{song.title}</h3>
              <h4 css={card_text}>{song.artist}</h4>
              <div css={card_icons_container}>
                <img src={edit} css={card_icons} onClick={() => update(song.id)} alt="Edit" />
                <img src={del} css={card_icons} onClick={() => delet(song.id)} alt="Delete" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Songs;
