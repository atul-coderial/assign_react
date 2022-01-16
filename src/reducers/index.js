import { combineReducers } from "redux";
import addData from './addData';
import editData from './editData'
import homeData from "./homeData";

export default combineReducers({
    addData,
    editData,
    homeData
})