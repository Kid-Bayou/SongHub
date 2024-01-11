export const fetchSongsRequest = () => ({
    type: 'FETCH_SONGS_REQUEST',
  });
  
  export const fetchSongsSuccess = (songs) => ({
    type: 'FETCH_SONGS_SUCCESS',
    payload: songs,
  });
  
  export const fetchSongsFailure = (error) => ({
    type: 'FETCH_SONGS_FAILURE',
    payload: error,
  });
  
  export const addSongRequest = (songData) => ({
    type: 'ADD_SONG_REQUEST',
    payload: songData,
  });
  
  export const addSongSuccess = (song) => ({
    type: 'ADD_SONG_SUCCESS',
    payload: song,
  });
  
  export const addSongFailure = (error) => ({
    type: 'ADD_SONG_FAILURE',
    payload: error,
  });
  
  export const updateSongRequest = (songId, songData) => ({
    type: 'UPDATE_SONG_REQUEST',
    payload: { songId, songData },
  });
  
  export const updateSongSuccess = (song) => ({
    type: 'UPDATE_SONG_SUCCESS',
    payload: song,
  });
  
  export const updateSongFailure = (error) => ({
    type: 'UPDATE_SONG_FAILURE',
    payload: error,
  });
  
  export const deleteSongRequest = (songId) => ({
    type: 'DELETE_SONG_REQUEST',
    payload: songId,
  });
  
  export const deleteSongSuccess = (songId) => ({
    type: 'DELETE_SONG_SUCCESS',
    payload: songId,
  });
  
  export const deleteSongFailure = (error) => ({
    type: 'DELETE_SONG_FAILURE',
    payload: error,
  });
  