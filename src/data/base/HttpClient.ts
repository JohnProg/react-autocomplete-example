import { REACT_APP_ISSUES_URL } from "../../utils/constants";

export default function HttpClient<T>(method: string): Promise<T[] | null> {
  return fetch(REACT_APP_ISSUES_URL, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
