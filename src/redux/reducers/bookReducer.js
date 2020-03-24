import * as bookTypes from 'redux/types/bookTypes';

const initialBookState = {
    listBook: [],
    err: undefined
}

const bookReducer = (state = initialBookState, action) => {
    switch(action.type){
        case bookTypes.GET_ALL_BOOK_SUCCESS: {
            const {items} = action.payload;
            return {...state, listBook: items}
        }
        case bookTypes.GET_ALL_BOOK_FAILED: {
            return {...state, err: action.payload}
        }
        case bookTypes.GET_MORE_BOOK_SUCCESS: {
            const {listBook} = state;
            const {items} = action.payload;
            return {...state, listBook: [ ...listBook, ...items]}
        }
        case bookTypes.GET_MORE_BOOK_FAILED: {
            return {...state, err: action.payload}
        }
        default: return state;
    }
}

export default bookReducer;