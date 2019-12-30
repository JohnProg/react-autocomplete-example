import { takeLatest } from "redux-saga/effects";

import { searchIssue } from "../modules";

export default function* rootSaga() {
  yield takeLatest(searchIssue.Types.SEARCH_ISSUE, searchIssue.saga);
}
