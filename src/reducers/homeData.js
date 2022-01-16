import {
    HOME_DATA
} from '../actions/actionTypes';

const initialResultState = {
    record: [],
   
  };

  
  export default function homeData(state = initialResultState, action) {
    switch (action.type) {
        case HOME_DATA :
            return {
                ...state,
                record: action.record
            }
        default : 
            return state;
    }
  }
  
  