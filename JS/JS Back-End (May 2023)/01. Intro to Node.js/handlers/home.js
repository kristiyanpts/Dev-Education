const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = [
  {
    name: "Shopito",
    description: "Mnogo qka kotka",
    image:
      "https://m.netinfo.bg/media/images/50180/50180702/1250-666-porodista-kotka.jpg",
    breed: "Razgonena",
  },
  {
    name: "Shopito",
    description: "Mnogo tupa kotka",
    image:
      "https://m.netinfo.bg/media/images/50180/50180702/1250-666-porodista-kotka.jpg",
    breed: "Ne Razgonena",
  },
];

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/" && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/home/index.html")
    );
    fs.readFile(filePath, (err, homePage) => {
      if (err) {
        console.log(err);
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });
        res.write("Server responded with 404");
        res.end();
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(homePage);
      res.end();
    });
  } else {
    return true;
  }
};
