import { combineReducers } from 'redux';
import songReducer from './SongSlice';
import songsReducer from './SongsSlice'; 

const rootReducer = combineReducers({
  song: songReducer,
  songs: songsReducer,
});

export default rootReducer;
