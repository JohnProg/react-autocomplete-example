import { call, put, select } from "redux-saga/effects";
import { IssueRepository } from "./../../../data/repositories";
import { Types } from "./actions";
import { Issue } from "../../types";

export default function* execute(action: { title: string }) {
  try {
    yield put({ type: Types.SEARCH_ISSUE_REQUEST });

    if (action.title !== "" && action.title !== undefined) {
      const currentData = yield select(state => state.issue.data);

      yield put({
        type: Types.SEARCH_ISSUE_FILTER,
        filteredData: currentData.filter((item: Issue) =>
          item.title
            .trim()
            .toLowerCase()
            .includes(action.title.trim().toLowerCase())
        )
      });
      return;
    }

    const data = yield call(IssueRepository.searchIssues);

    yield put({
      type: Types.SEARCH_ISSUE_SUCCESS,
      data: [...data]
    });
  } catch (error) {
    yield put({
      type: Types.SEARCH_ISSUE_FAILURE,
      error: error.toString()
    });
  }
}
