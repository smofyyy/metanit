import { Application } from "./Application.js";
import { router } from "./src/user-router.js";
import { jsonParser } from "./parseJson.js"

const port = 5000;

const app = new Application();

app.use(jsonParser);

app.addRouter(router)

app.listen(port, () => console.log("server started"));