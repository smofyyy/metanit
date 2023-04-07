import http from "http";
import { EventEmitter } from "events";

export class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = [];
    }

    // endpoint = {
    //   '/users': {
    //      "GET": handler,
    //      "POST": 'handler'
    //    }
    // }
    use(middleware) {
        this.middlewares.push(middleware)
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => { // получаем массив ["/users"] и говорим что это path
            const endpoint = router.endpoints[path]; // создаем переменную в которой будет храниться метод с колбэком вида { GET: 'handler', POST: 'handler' }
            Object.keys(endpoint).forEach((method) => { // получаем массив методов вида [ 'GET', 'POST' ]
                const handler = endpoint[method]; // и теперь создаем отдельную переменную для получения handler'а
                this.emitter.on(this._getRouteMask(path, method), (req, res) => { // вешаем обработчик события на маску пути и метода
                    this.middlewares.forEach(middleware => middleware(req, res));
                    handler(req, res);
                });
            })
        })
    }

    _createServer() {
        return http.createServer((req, res) => {
            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            })

            req.on("end", () =>{
                if (body) {
                    req.body = JSON.parse(body);
                }
                const emited = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
                if(!emited) {
                    res.end();
                }
            })
        })
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

}