module.exports = (conditions) => `import BasApi from './BaseApi'

class BaseRepository extends BaseApi {

  public async get<Array<T>>(url: string) {
    return new Promise<Array<T>>(resolve, reject) => {
      this.doHttpRequest('get', 'core', 'url')
      .then((data: Array<T>) => resolve(data))
      .catch(reason => reject(reason));
    }
  }

  public async getById<T>(url: string, id: number) {
    return new Promise<T>(resolve, reject) => {
      this.doHttpRequest('get', 'core', 'url', null, id)
      .then(data => resolve(data))
      .catch(reason => reject(reason));
    }
  }

  public async post<T>(url: string, obj<T>) {
    return new Promise<T>(resolve, reject) => {
      this.doHttpRequest('post', 'core', 'url', obj)
      .then(response => resolve(response.status))
      .catch(reason => reject(reason));
    }
  } 
}
`


