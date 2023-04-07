import { EventEmitter } from "events";

export const goodBye = (name) => {
    const emitter = new EventEmitter();
    // const name = "Alex";
    emitter.on(name, () => {
        console.log(`Пока ${name}`);
    });
    emitter.emit(name);
}


