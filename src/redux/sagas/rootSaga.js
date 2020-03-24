import {delay, put, takeLatest, takeEvery, call} from 'redux-saga/effects';
import * as bookTypes from 'redux/types/bookTypes';
import {setLoading, stopLoading} from 'redux/actions/uiActions';
import {getAllBookSuccess, getAllBookFailed, getMoreBookSuccess, getMoreBookFailed} from 'redux/actions/bookAction';
import {loadListBook, loadMoreListBook} from 'helpers/apiCaller';

function* watchFetchListBook() {
    yield put(setLoading());
    const rs = yield call(loadListBook);
    switch (rs.status) {
        case 404:
            yield put(getAllBookFailed(rs.err))
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

function* watchFetchMoreListBook(action){
    const {payload } = action;
    yield put(setLoading());
    const rs = yield call(loadMoreListBook, payload);
    switch (rs.status) {
        case 404:
            yield put(getMoreBookFailed(rs.err))
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

function* rootSaga(){
    yield takeLatest(bookTypes.GET_ALL_BOOK, watchFetchListBook);
    yield takeEvery(bookTypes.GET_MORE_BOOK, watchFetchMoreListBook);
}

export default rootSaga;