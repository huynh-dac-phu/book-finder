import * as bookTypes from 'redux/types/bookTypes'

export const getAllBook = () => {
    return {
        type: bookTypes.GET_ALL_BOOK
    }
}

export const getAllBookSuccess = data => {
    return {
        type: bookTypes.GET_ALL_BOOK_SUCCESS,
        payload: data
    }
}

export const getAllBookFailed = err => {
    return {
        type: bookTypes.GET_ALL_BOOK_FAILED,
        payload: err
    }
}

export const getMoreBook = (payload) => {
    return {
        type: bookTypes.GET_MORE_BOOK,
        payload
    }
}

export const getMoreBookSuccess = (data) => {
    return {
        type: bookTypes.GET_MORE_BOOK_SUCCESS,
        payload: data
    }
}

export const getMoreBookFailed = (err) => {
    return {
        type: bookTypes.GET_MORE_BOOK_FAILED,
        payload: err
    }
}

export const makeLikeToBook = id => {
    return {
        type: bookTypes.MAKE_LIKE_BOOK,
        payload: id
    }
}

export const makeUnLikeToBook = id => {
    return {
        type: bookTypes.MAKE_UNLIKE_BOOK,
        payload: id
    }
}
