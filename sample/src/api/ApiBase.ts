import axios, { AxiosResponse, AxiosError } from 'axios';

interface Headers {
  ['Content-Type']?: string;
  Authorization?: string;
}

interface Config {
    method: HttpRequestTypes;
    url: string;
    data: {};
    headers: {};
    params: {} | [];
}

type Resolve<T> = (value: T | undefined) => void;

type Reject = (reason?: AxiosError | undefined) => void;

export enum HttpRequestTypes {
  POST = 'post',
  GET = 'get'
};

class ApiBase {
  
    public doHttpRequest<T> (
        method: HttpRequestTypes, 
        endpoint: string, 
        data: {} | PromiseLike<{}>, 
        params: {} | [] = {}, 
        asFormValues: boolean = false, 
        authenticated: boolean = true
      ) {
        return new Promise<T>((resolve, reject) => {
            this.doRequestInternal<T>(resolve, reject, method, endpoint, data, params, asFormValues, authenticated);
        });
    } 

    private doRequestInternal<T>(
      resolve: Resolve<T>, 
      reject: Reject, 
      method: HttpRequestTypes, 
      endpoint: string, 
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

        const url = endpoint;
        const config: Config = { method, url, data, headers, params };
        axios.request<T>(config)
        .then((response: AxiosResponse<T>) => resolve(response.data))
        .catch((error: AxiosError) => reject(error));
    }
}

export default ApiBase;
