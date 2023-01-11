const http = require("http");

const host = "0.0.0.0";
const port = process.env.PORT || 3000;
const options = {};

function handler(req, res) {
  const headers = req.headers;
  console.log(JSON.stringify(headers));
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(headers));
}

const server = http.createServer(options, handler);
server.listen(port, () => {
  console.log("server listening on port %d ... ", port);
});
