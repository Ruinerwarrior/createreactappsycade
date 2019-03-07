module.exports= (conditions) => `import axios from 'axios';

interface Headers {
  ['Content-Type']?: string;
  Authorization?: string;
}

interface Config {
    method: string;
    url: string;
    data: {};
    headers: {};
    params: {} | [];
}

type Resolve = (value?: {} | Promise<{}> | undefined) => void;

type Reject = (reason?: {} | undefined) => void;

class ApiBase {
    public doHttpRequest(
        method: string, 
        api: string, 
        endpoint: string, 
        data: {} | PromiseLike<{}>, 
        params: {} | [] = {}, 
        asFormValues: boolean = false, 
        authenticated: boolean = true
      ) {
        return new Promise((resolve, reject) => {
            this.doRequestInternal(resolve, reject, method, api, endpoint, data, params, asFormValues, authenticated);
        });
    }
    private doRequestInternal(
      resolve: Resolve, 
      reject: Reject, 
      method: string, 
      api: string, 
      endpoint: string, data: {} | PromiseLike<{}>, 
      params: {}, 
      asFormValues: boolean = false, 
      authenticated: boolean = true
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
        axios.request(config)
        .then(response => {
            resolve(response.data);
        })
        .catch(reason => reject(reason));
    }
}

export default ApiBase;
`
