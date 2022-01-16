import {
    HOME_DATA
} from './actionTypes';

// Helper URL
import { APIUrls } from "../helpers/urls";

export function fetchHomeData (){
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
            dispatch(homeData(data));
          })
          .catch((err) => {
            console.log(err);
          });
      };
}

export function homeData(record){
    return {
        type: HOME_DATA,
        record
    }
}