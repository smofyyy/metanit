// import { createServerNode } from "./createserver&import_export/createserver-node.js";
// import { greeting } from "./createserver&import_export/greeting.js";
// createServerNode(greeting);

// import { serv } from "./createserver_express/createserver-express.js";
// serv();

// import { goodBye } from "./event_emmiter/event-emmiter.js";
// goodBye("Alex");

let router = {
    "/users": {
      "GET": "handler", 
      "POST": "handler"
      }
    }
  
console.log(router["/users"])

  