import {
  delay,
  put,
  takeLatest,
  takeEvery,
  call,
  select
} from "redux-saga/effects";
import * as bookTypes from "redux/types/bookTypes";
import { setLoading, stopLoading } from "redux/actions/uiActions";
import {
  getAllBookSuccess,
  getAllBookFailed,
  getMoreBookSuccess,
  getMoreBookFailed
} from "redux/actions/bookAction";
import { loadListBook, loadMoreListBook, searchBook } from "helpers/apiCaller";

function* watchFetchListBook() {
  yield put(setLoading());
  const rs = yield call(loadListBook);
  switch (rs.status) {
    case 404:
      yield put(getAllBookFailed(rs.err));
      break;
    case 200:
      yield put(getAllBookSuccess(rs.data));
      break;
    default:
      break;
  }
  yield delay(500);
  yield put(stopLoading());
}

function* watchFetchMoreListBook() {
  yield put(setLoading());
  const startIndex = yield select(state => state.books.maxResult);
  const rs = yield call(loadMoreListBook, startIndex);
  switch (rs.status) {
    case 404:
      yield put(getMoreBookFailed(rs.err));
      break;
    case 200:
      yield put(getMoreBookSuccess(rs.data));
      break;
    default:
      break;
  }
  yield delay(500);
  yield put(stopLoading());
}

function* watchSearchBook(action) {
  const {
    payload: { query, option }
  } = action;
  yield delay(500);
  yield put(setLoading());
  const rs = yield call(searchBook, query, option);
  switch (rs.status) {
    case 404:
      yield put(getAllBookFailed(rs.err));
      break;
    case 200:
      console.log(rs.data.totalItems);
      if (rs.data.totalItems === 0) {
        yield put(getAllBookSuccess({ items: [] }));
      } else {
        yield put(getAllBookSuccess(rs.data));
      }
      break;
    default:
      break;
  }
  yield delay(500);
  yield put(stopLoading());
}

function* rootSaga() {
  yield takeLatest(bookTypes.GET_ALL_BOOK, watchFetchListBook);
  yield takeEvery(bookTypes.GET_MORE_BOOK, watchFetchMoreListBook);
  yield takeEvery(bookTypes.DO_SEARCHING, watchSearchBook);
}

export default rootSaga;
