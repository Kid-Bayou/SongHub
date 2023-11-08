import { Link, Outlet } from "react-router-dom";
import { css } from "@emotion/react";

import Songs from "./Songs";
import Playlists from "./Playlists";

const songs_container = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const songs_header = css`
  color: #422226;
`;

const songs_nav = css`
  display: flex;
  gap: 30px;
`;

const songs_link = css`
  text-decoration: none;
  color: #422226;
`;

const songs_outlet = css `

`;

function SongsLayout() {
  return (
    <>
      <div css={songs_container}>
        <h1 css={songs_header}>Songs</h1>
        <div css={songs_nav}>
          <Link to="/songs" css={songs_link}>
            Songs
          </Link>
          <Link to="/songs/playlists" css={songs_link}>
            Playlists
          </Link>
        </div>
        <div css={songs_outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SongsLayout;
