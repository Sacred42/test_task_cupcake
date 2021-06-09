export default class Ajax {

    _base = 'http://localhost:3001/api/v1';
    sendRequest = async(url) => {
      return await fetch(`${this._base}${url}`)
      .then((date)=>date.json())
      .then(({rates})=>rates)
      .catch((err)=>console.log(err , 'ошибка'))
    }

    sendRequestPoll = async(url) => {
        return await fetch(`${this._base}${url}`)
      .then((date)=>date.json())
      .then(({rates})=>rates)
      .catch((err)=>console.log(err , 'ошибка'))
    }

    reqRender = () => {
        return Promise.all([this.reqFirst(), this.reqSecond(), this.reqThird()])
    }

    reqPoll = () => {
        return Promise.all([this.reqFirstPoll(), this.reqSecondPoll(), this.reqThird()])
    }

    reqFirst = () => {
        return this.sendRequest('/first');
    }

    reqSecond = () => {
        return this.sendRequest('/second');
    }

    reqThird = () => {
        return this.sendRequest('/third');
    }

    reqFirstPoll = () => {
        console.log('работает')
        return this.sendRequestPoll('/first/poll');
    }

    reqSecondPoll = () => {
        return this.sendRequestPoll('/second/poll');
    }

    reqThirdPoll = () => {
        return this.sendRequestPoll('/third/poll');
    }
}