import express from "express";

export const serv = () => {
    const app = express();
    app.get("/", (req, res) => {
        res.send("hello qqqqq");
    });
    app.listen(3000, () => {
        console.log("Serv start");
    });
}
