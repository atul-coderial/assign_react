import {
    EDIT_RESULT_START,
    EDIT_RESULT_SUCCESS,
    EDIT_RESULT_FAILED,
    EDIT_RESULT_FIND_SUCCESS,
    EDIT_RESULT_FIND_FAILED
} from '../actions/actionTypes';

const initialResultState = {
    error: null,
    success: null,
    inProgress: false,
    results: {}

  };

  export  default function editData (state = initialResultState, action){
    switch (action.type) {
        case EDIT_RESULT_FIND_SUCCESS : 
            return{
                ...state,
                error:null,
                success: null,
                inProgress: false,
                results: action.success
            }
        case EDIT_RESULT_FIND_FAILED : 
            return {
                ...state,
                error: action.error,
                success: null,
                inProgress: false,
                results: {}
            }
        case EDIT_RESULT_START :
            return {
                ...state,
                inProgress: true
            }
        case EDIT_RESULT_SUCCESS :
            return {
                ...state,
                error: null,
                success: action.success,
                inProgress: false,
                results: {}
            }
        case EDIT_RESULT_FAILED : 
            return {
                ...state,
                error: action.error,
                success: null,
                inProgress: false,
                results: {}
            }
        default:
            return state;
    }
  }