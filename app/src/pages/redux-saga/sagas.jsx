import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_SONGS_REQUEST,
  ADD_SONG_REQUEST,
  UPDATE_SONG_REQUEST,
  DELETE_SONG_REQUEST,
} from './actionTypes';
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  addSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from './actions';
import { db } from '../../config/firebase';

function* fetchSongsSaga() {
  try {
    const songsSnapshot = yield call(() => getDocs(collection(db, 'songs')));
    const songs = songsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongSaga(action) {
  try {
    const { title, artist, duration } = action.payload;
    const newSongRef = yield call(() => addDoc(collection(db, 'songs'), { title, artist, duration }));
    const newSong = { id: newSongRef.id, title, artist, duration };

    yield put(addSongSuccess(newSong));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* updateSongSaga(action) {
  try {
    
    const { songId, songData } = action.payload;
    const songRef = doc(db, 'songs', songId);
    yield call(() => updateDoc(songRef, songData));

    yield put(updateSongSuccess(songData));
  } catch (error) {

    yield put(updateSongFailure(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
   
    const songId = action.payload;
    const songRef = doc(db, 'songs', songId);
    yield call(() => deleteDoc(songRef));

    yield put(deleteSongSuccess(songId));
  } catch (error) {
 
    yield put(deleteSongFailure(error.message));
  }
}


export function* watchSongs() {
  yield takeLatest(FETCH_SONGS_REQUEST, fetchSongsSaga);
  yield takeLatest(ADD_SONG_REQUEST, addSongSaga);
  yield takeLatest(UPDATE_SONG_REQUEST, updateSongSaga);
  yield takeLatest(DELETE_SONG_REQUEST, deleteSongSaga);
}
