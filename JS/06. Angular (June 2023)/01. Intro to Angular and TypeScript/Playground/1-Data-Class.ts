class HTTPRequest {
  method: string;
  uri: string;
  version: string;
  message: string;
  response: string;
  fulfilled?: boolean;

  constructor(method: string, uri: string, version: string, message: string) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = "";
    this.fulfilled = false;
  }
}

let myData = new HTTPRequest("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
