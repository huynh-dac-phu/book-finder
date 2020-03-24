import * as uiTypes from 'redux/types/uiTypes';

const intialUiState = {
    loading: false
}

const uiReducer = (state = intialUiState, action) => {
    switch(action.type){
        case uiTypes.LOADING: {
            return {...state, loading: true}
        }
        case uiTypes.STOP_LOADING: {
            return {...state, loading: false}
        }
        default: return state;
    }
}

export default uiReducer;