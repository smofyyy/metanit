import http from "http";

export const createServerNode = (name) => {
    http.createServer((require, response) => {
        response.end("hello, nodejs");
    }).listen(3000, "127.0.0.1", () => {
        return console.log(name);
    });
}