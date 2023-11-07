import { Link, Outlet } from "react-router-dom"
import Songs from "./Songs"
import  Playlists from "./Playlists"

function SongsLayout() {
  return (
    <>
      <div className="songs-container">
        <h1 className="songs-header">Songs</h1>
        <div className="songs-nav">
            <Link to="/songs" className="songs-link">Songs</Link>
            <Link to="/songs/playlists" className="songs-link">Playlists</Link>
        </div>
        <div className="songs-outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SongsLayout;
