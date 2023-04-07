export class Router {

    constructor() {
        this.endpoints = {}
        // endpoints {   // endpoints будет иметь вот так вид
        //     "/users": {  // путь
        //         "GET": "handler", // handler это функция обработчик которая будет срабатывать по указанному пути
        //         "POST": "handler"
        //     }
        // }
    }
    
    request(method = "GET", path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {} // если по текущему адресу ничего не добавлено, то мы создаем пустой объект
        }
        const endpoint = this.endpoints[path]; // чтобы проще было работать, объявляем путь отдельной константой 

        if(endpoint[method]) {
            throw new Error(`Метод ${method} по адресу ${path} уже существует`) // проверка на существующий метод
        }

        endpoint[method] = handler; // достраиваем объект, присваивания методу функцию, если она передавалась
    }

    get(path, handler) {
        this.request("GET", path, handler);
    }
    post(path, handler) {
        this.request("POST", path, handler);
    }
}