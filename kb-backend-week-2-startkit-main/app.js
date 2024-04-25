const http = require("http")
const path = require("path")
const {
    mainRouteController,
    defaultRouteController,
    gameRouteController,
    voteRouteController,    
} = require("./controllers")
const PORT = process.env.PORT || 3006;
const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
        mainRouteController(res, "/index.html", ".html")
        break;
        case "/game":
            gameRouteController(res)
            break;
            case "/vote":
                voteRouteController(req, res)
                break;
                default:
                  defaultRouteController(res, url)
            break;
  }
}); 
server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} , complete!`);
});