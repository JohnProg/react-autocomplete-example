import React, { useEffect } from "react";
import IssueListItem from "./components/IssueListItem";
import Autocomplete from "../../components/Autocomplete";
import { IIssueState } from "../../../state/modules/searchIssue/types";
import { Issue } from "../../../state/types";

interface IDispatchToProps {
  searchIssue: (title?: string) => {};
}
type AllProps = IIssueState & IDispatchToProps;
const SearchIssuesView: React.FC<AllProps> = ({
  data,
  searchIssue
}: AllProps) => {
  useEffect(() => {
    debugger;
    searchIssue();
  }, [searchIssue]);
  const renderItem = (itemData: Issue) => {
    return <IssueListItem data={itemData} />;
  };
  return (
    <Autocomplete
      data={data}
      renderItem={renderItem}
      searchValue={searchIssue}
      placeholder={"Search an issue"}
    />
  );
};

export default SearchIssuesView;
