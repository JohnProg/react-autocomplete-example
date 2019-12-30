import { IIssueState } from "./modules/searchIssue/types";

export interface IApplicationState {
  issue: IIssueState;
}

export interface Issue {
  id: number;
  title: string;
  body: string;
  userId: number;
}
