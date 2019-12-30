import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators } from "./../../../state/modules/searchIssue";
import SearchIssuesView from "./SearchIssuesView";
import { IIssueState } from "../../../state/modules/searchIssue/types";
import { IApplicationState } from "../../../state/types";

const SearchIssuesViewController = () => {
  const dispatch = useDispatch();
  const stateToProps: IIssueState = useSelector(
    ({ issue }: IApplicationState) => issue
  );
  const dispatchToProps = {
    searchIssue: useCallback(
      (title?: string) => dispatch(Creators.searchIssue(title)),
      [dispatch]
    )
  };
  return <SearchIssuesView {...stateToProps} {...dispatchToProps} />;
};

export default SearchIssuesViewController;
