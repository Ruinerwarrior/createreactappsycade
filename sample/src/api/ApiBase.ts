import axios, { AxiosRequestConfig } from 'axios';

interface Headers {
  ['Content-Type']?: string;
  Authorization?: string;
}

export enum HttpRequestTypes {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
};

class ApiBase {

  public static doHttpRequest<T> (
      method: HttpRequestTypes, 
      url: string, 
      data: {} | PromiseLike<{}>, 
      params: {} | [] = {}, 
      asFormValues: boolean = false, 
      authenticated: boolean = true
    ) {
      return new Promise<T>(() => {
          this.doRequestInternal<T>(method, url, data, params, asFormValues, authenticated);
      });
  } 

  private static async doRequestInternal<T>(
    method: HttpRequestTypes, 
    url: string, 
    data: {} | PromiseLike<{}>, 
    params: {}, 
    asFormValues: boolean, 
    authenticated: boolean
  ) {
      let headers: Headers  = {};

      if(!asFormValues) {
        headers['Content-Type'] = 'application/json';
      }

      if(authenticated) {
        headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token');
      }

      const config: AxiosRequestConfig = { method, url, data, headers, params };
      return await axios.request<T>(config)
  }
}

export default ApiBase;
