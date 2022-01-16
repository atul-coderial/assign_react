import {
  PROCESSFORMDATA_START,
  PROCESSFORMDATA_SUCCESS,
  PROCESSFORMDATA_FAILED,
  FETCH_RESULT,
  FETCH_RESULT_FAILED,
  DELETE_RESULT_START,
  DELETE_RESULT_SUCCESS,
  DELETE_RESULT_FAILED
} from "../actions/actionTypes";

const initialFormState = {
  // form: {},
  error: null,
  success: null,
  inProgress: false,
  results: []
};

export default function addData(state = initialFormState, action) {
  switch (action.type) {
    case PROCESSFORMDATA_START:
      return {
        ...state,
        inProgress: true,
      };
    case PROCESSFORMDATA_SUCCESS:
      return {
        ...state,
        inProgress: false,
        error: null,
        success: action.success,
      };
    case PROCESSFORMDATA_FAILED:
      return {
        ...state,
        inProgress: false,
        success: null,
        error: action.error,
      }
    case FETCH_RESULT: 
      return{
        results: action.results
      };
    case FETCH_RESULT_FAILED: 
      return {
        error: action.error
      }
    case DELETE_RESULT_START: 
      return {
        ...state,
        inProgress: true
      }
    case DELETE_RESULT_SUCCESS: 
      return {
        ...state,
        inProgress: false,
        error: null,
        success: action.success,
      }
    case DELETE_RESULT_FAILED: 
      return {
        ...state,
        inProgress: false,
        success: null,
        error: action.error,
      }
    default:
      return state;
  }
}
