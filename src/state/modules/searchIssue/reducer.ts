import { createReducer } from "reduxsauce";
import { Types } from "./actions";
import { IIssueState } from "./types";
import { Issue } from "../../types";

/* ------------- Initial State ------------- */

const INITIAL_STATE: IIssueState = {
  data: [],
  filteredData: [],
  isLoading: false,
  error: null
};

/* ------------- Reducers ------------- */

const request = (state: IIssueState) => ({
  ...state,
  isLoading: true,
  error: null
});

const success = (state: IIssueState, action: { data: Issue[] }) => ({
  ...state,
  data: action.data,
  filteredData: action.data,
  isLoading: false,
  error: null
});

const filter = (state: IIssueState, action: { filteredData: Issue[] }) => ({
  ...state,
  filteredData: action.filteredData,
  isLoading: false,
  error: null
});

const failure = (state: IIssueState, action: { error: string }) => ({
  ...state,
  isLoading: false,
  error: action.error
});

const clear = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.SEARCH_ISSUE_REQUEST]: request,
  [Types.SEARCH_ISSUE_SUCCESS]: success,
  [Types.SEARCH_ISSUE_FAILURE]: failure,
  [Types.SEARCH_ISSUE_FILTER]: filter,
  [Types.CLEAR_SEARCH_ISSUE]: clear
});
