const htpp = require("http");
const port = 3000;

const handlers = require("../handlers");

htpp
  .createServer((req, res) => {
    for (let handler of handlers) {
      if (!handler(req, res)) {
        break;
      }
    }
  })
  .listen(port);
