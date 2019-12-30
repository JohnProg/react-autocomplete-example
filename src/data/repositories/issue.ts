import HttpClient from "./../base/HttpClient";

export default class IssueRepository {
  public static async searchIssues() {
    try {
      const response = await HttpClient("GET");
      return response;
    } catch (error) {
      throw new Error("No Data");
    }
  }
}
