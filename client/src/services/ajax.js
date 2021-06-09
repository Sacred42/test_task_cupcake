export default class Ajax {

    _base = 'http://localhost:3001/api/v1';
    sendRequest = async(url) => {
      return await fetch(`${this._base}${url}`)
      .then((date)=>date.json())
      .then(({rates})=>rates) 
    }

    ReqRender = () => {
        return Promise.all([this.ReqFirst(), this.ReqSecond(), this.ReqThird()])
    }

    ReqFirst = () => {
        return this.sendRequest('/first');
    }

    ReqSecond = () => {
        return this.sendRequest('/second');
    }

    ReqThird = () => {
        return this.sendRequest('/third');
    }
}