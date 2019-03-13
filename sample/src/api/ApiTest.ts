import ApiBase, { HttpRequestTypes } from "./ApiBase";

//api call that returns string
export default class ApiTest extends ApiBase {
  
  static getTitle = async () => {
    return await ApiBase.doHttpRequest<string>(HttpRequestTypes.GET, 'http://localhost:5001/api/title', {}, {}, false, false);
  }
}