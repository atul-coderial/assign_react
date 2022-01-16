import {
    EDIT_RESULT_START,
    EDIT_RESULT_SUCCESS,
    EDIT_RESULT_FAILED,
    EDIT_RESULT_FIND_SUCCESS,
    EDIT_RESULT_FIND_FAILED
} from './actionTypes';

// Helper URL
import { APIUrls } from "../helpers/urls";

// Find Result Action

export function editFindResult(ID){
    return (dispatch) => {
      const url = APIUrls.editFindResult(ID);
  
      fetch(url, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((data) => {
          
          dispatch(editFindSuccess(data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(editFindFailed(err));
        });
    };
  }

  export function editFindFailed(error) {
    return {
      type: EDIT_RESULT_FIND_FAILED,
      error,
    };
  }
  
  export function editFindSuccess(success) {
    return {
      type: EDIT_RESULT_FIND_SUCCESS,
      success,
    };
  }

  export function editResult(data){
    return (dispatch) => {
      const url = APIUrls.editResult();
  
      fetch(url, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          
          dispatch(editSuccess(data.message));
        })
        .catch((err) => {
          console.log(err);
          dispatch(editFailed(err));
        });
    };
  }

  export function editFailed(error) {
    return {
      type: EDIT_RESULT_FAILED,
      error,
    };
  }
  
  export function editSuccess(success) {
    return {
      type: EDIT_RESULT_SUCCESS,
      success,
    };
  }

  export function editStart (){
    return {
      type: EDIT_RESULT_START
    }
  }

