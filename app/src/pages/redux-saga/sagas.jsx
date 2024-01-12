import { takeEvery, put, call } from 'redux-saga/effects';
import { addSongSuccess, deleteSongSuccess, updateSongSuccess, setSongs } from '../redux/SongsSlice';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

export function* fetchSongsSaga() {
  try {
    const songsCollectionRef = collection(db, 'songs');
    const data = yield call(getDocs, songsCollectionRef);
    const songs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    yield put(setSongs(songs));
  } catch (error) {
    console.error('Error fetching songs: ', error);
    
  }
}

export function* addSongSaga(action) {
  const { songUpload, imageUpload, songTitle, artist } = action.payload;

  try {
    const songRef = ref(storage, `songs/${songUpload.name}-${v4()}`);
    const imageRef = ref(storage, `images/${imageUpload.name}-${v4()}`);

    yield call(uploadBytes, songRef, songUpload);
    yield call(uploadBytes, imageRef, imageUpload);

    const downloadURL = yield call(getDownloadURL, songRef);
    const downloadURL2 = yield call(getDownloadURL, imageRef);

    const songCollectionRef = collection(db, 'songs');
    const docRef = yield call(addDoc, songCollectionRef, {
      title: songTitle,
      artist: artist,
      file_path: downloadURL,
      img_path: downloadURL2,
    });

    yield put(addSongSuccess({ id: docRef.id, title: songTitle, artist, file_path: downloadURL, img_path: downloadURL2 }));
  } catch (error) {
    console.error('Error uploading file: ', error);
  }
}

export function* deleteSongSaga(action) {
  const { id } = action.payload;

  const songDoc = doc(db, 'songs', id);
  yield call(deleteDoc, songDoc);

  yield put(deleteSongSuccess(id));
}

export function* updateSongSaga(action) {
  const { id, updatedSong } = action.payload;

  const songDoc = doc(db, 'songs', id);
  yield call(updateDoc, songDoc, updatedSong);

  yield put(updateSongSuccess({ id, ...updatedSong }));
}

export function* rootSaga() {
  yield takeEvery(FETCH_SONGS, fetchSongsSaga);
  yield takeEvery(ADD_SONG, addSongSaga);
  yield takeEvery(DELETE_SONG, deleteSongSaga);
  yield takeEvery(UPDATE_SONG, updateSongSaga);
}
