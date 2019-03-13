import ApiBase, { HttpRequestTypes } from "./ApiBase";

export default class ApiTest extends ApiBase {
  public getTitle = async () => {
    return await this.doHttpRequest<string>(HttpRequestTypes.GET, 'http://localhost:5001/api/title', {}, {}, false, false);
  }
}