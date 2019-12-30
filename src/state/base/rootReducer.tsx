import { combineReducers } from "redux";
import { searchIssue } from "./../modules";
import { IApplicationState } from "../types";

export default combineReducers<IApplicationState>({
  issue: searchIssue.reducer
});
