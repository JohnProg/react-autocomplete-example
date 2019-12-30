import { Issue } from "../../types";

export interface IIssueState {
  readonly data: Issue[];
  readonly filteredData: Issue[];
  readonly isLoading: boolean;
  readonly error?: string | null;
}
