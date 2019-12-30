import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  // View actions
  searchIssue: ["title"],
  // Reducer
  searchIssueRequest: null,
  searchIssueSuccess: null,
  searchIssueFailure: ["error"],
  searchIssueFilter: null,
  clearSearchIssue: null
});
export { Creators, Types };
