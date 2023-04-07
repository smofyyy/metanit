import http, { Server } from "http"

const port = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-type": "text/html; charset=utf-8"
//     })
//     res.end("хеллоу")
// })

// const server = http.createServer((req, res) => {
//     if (req.url === "/users") {
//         return res.end("<h1>Users<h1>")
//     }
//     if (req.url === "/posts") {
//         return res.end("<h1>Posts<h1>")
//     }
//     res.end("<h1>Start<h1>")
// })

// с реализацией json

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "application/json"
    })
    if (req.url === "/users") {
        return res.end(JSON.stringify(
            [
                {
                    id: 1,
                    name: "users"
                }
                
            ]
        ))
    }
    res.end(req.url)
})

server.listen(port, () => console.log("сервер стартовал"));
