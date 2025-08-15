import http from "http";
import fs from "fs";

const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("index.html"));
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./about.html"));
  } else if (req.url === "/contact-me") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./contact-me.html"));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./404.html"));
  }
});
server.listen(8080);
