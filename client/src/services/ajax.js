export default class Ajax {
  _base = "http://localhost:3001/api/v1";

  sendRequest = async (url) => {
    return await fetch(`${this._base}${url}`)
      .then((date) => date.json())
      .then(({ rates }) => rates)
      .catch((err) => console.log(err));
  };

  sendAllRequest = (first, second, third) => {
    return Promise.all([first, second, third]);
  };

  reqRender = () => {
    return this.sendAllRequest(
      this.sendRequest("/first"),
      this.sendRequest("/second"),
      this.sendRequest("/third")
    );
  };

  reqPoll = () => {
    return this.sendAllRequest(
      this.sendRequest("/first/poll"),
      this.sendRequest("/second/poll"),
      this.sendRequest("/third/poll")
    );
  };
}
