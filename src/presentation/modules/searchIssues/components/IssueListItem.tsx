import React from "react";
import { Issue } from "../../../../state/types";

interface Props {
  data: Issue;
}

const IssueListItem: React.FC<Props> = ({ data }: Props) => {
  return <span>{data.title}</span>;
};

export default IssueListItem;
