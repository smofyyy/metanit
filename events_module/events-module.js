import { EventEmitter } from "events"

const emitter = new EventEmitter();

emitter.on("message", (data) => {
    console.log(`Получено сообщение: \"${data}\"`);
})

const MESSAGE = process.env.message || "";

if (MESSAGE) {
    emitter.emit("message", MESSAGE)
} else {
    emitter.emit("message", "ничего не было введено")
}