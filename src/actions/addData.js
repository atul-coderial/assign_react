import {
  PROCESSFORMDATA_START,
  PROCESSFORMDATA_SUCCESS,
  PROCESSFORMDATA_FAILED,
  FETCH_RESULT,
  FETCH_RESULT_FAILED,
  DELETE_RESULT_START,
  DELETE_RESULT_SUCCESS,
  DELETE_RESULT_FAILED
} from "./actionTypes";

// Helper URL
import { APIUrls } from "../helpers/urls";

// Data Add Action
export function create(data) {
  return (dispatch) => {
    const url = APIUrls.createResult();

    fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(createSuccessful(data.message));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createFailed(data.message));
      });
  };
}

export function startCreate() {
  return {
    type: PROCESSFORMDATA_START,
  };
}

export function createFailed(error) {
  return {
    type: PROCESSFORMDATA_FAILED,
    error,
  };
}

export function createSuccessful(success) {
  return {
    type: PROCESSFORMDATA_SUCCESS,
    success,
  };
}

// End Data Add action

// Fetch Record

export function fetchResult() {
  return (dispatch) => {
    const url = APIUrls.fetchResult();

    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(resultSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(resultFailed(err));
      });
  };
}

export function resultSuccess(results) {
  return {
    type: FETCH_RESULT,
    results,
  };
}

export function resultFailed(error) {
  return {
    type: FETCH_RESULT_FAILED,
    error,
  };
}

// Fetch Record End

// Delete Record 
export function deleteResult(ID){
  return (dispatch) => {
    const url = APIUrls.deleteResult(ID);

    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(deleteSuccess(data.message));
      })
      .catch((err) => {
        console.log(err);
        dispatch(deleteFailed(err));
      });
  };
}

export function deleteStart() {
  return {
    type: DELETE_RESULT_START,
  };
}

export function deleteFailed(error) {
  return {
    type: DELETE_RESULT_FAILED,
    error,
  };
}

export function deleteSuccess(success) {
  return {
    type: DELETE_RESULT_SUCCESS,
    success,
  };
}