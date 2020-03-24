import * as uiTypes from 'redux/types/uiTypes';

export const setLoading = () => {
    return {
        type: uiTypes.LOADING
    }
}

export const stopLoading = () => {
    return {
        type: uiTypes.STOP_LOADING
    }
}