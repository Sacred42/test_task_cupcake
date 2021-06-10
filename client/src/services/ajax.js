export default class Ajax {

    _base = 'http://localhost:3001/api/v1';
    sendRequest = async(url) => {
      return await fetch(`${this._base}${url}`)
      .then((date)=>date.json())
      .then(({rates})=>rates)
      .catch((err)=>console.log(err))
    }

    sendAllRequest = (first , second , third) => {
        return Promise.all([first(), second(), third()])  
    }

    reqRender = () => {
       return this.sendAllRequest(this.reqFirst, this.reqSecond, this.reqThird)
    }

    reqPoll = () => {
        return this.sendAllRequest(this.reqFirstPoll, this.reqSecondPoll, this.reqThirdPoll);
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
        return this.sendRequest('/first/poll');
    }

    reqSecondPoll = () => {
        return this.sendRequest('/second/poll');
    }

    reqThirdPoll = () => {
        return this.sendRequest('/third/poll');
    }
}