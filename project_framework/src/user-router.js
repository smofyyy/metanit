import { Router } from "../Router.js" 

export const router = new Router();

const users = [
    { id: 1, name: "Sanya" },
    { id: 2, name: "Roman" }
]

router.get("/users", (req, res) => {
    res.send(users);
})

router.post("/users", (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(user)

    res.send(user);
})
