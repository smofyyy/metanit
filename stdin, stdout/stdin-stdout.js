import { stdout, stdin } from "process";

process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));

stdout.write("Как тебя зовут?\n")

stdin.on('data', (data) => {
    const nameToString = data.toString();
    const nameFinal = nameToString.slice(0, nameToString.length - 2) 
    stdout.write(`Привет, ${nameFinal}!\n`)
    process.exit();
})

// const myBuffer = Buffer.from('Node', 'utf-8');
// // получим <Buffer 48 69 20 4e 6f 64 65 2e 6a 73 21>
// console.log(myBuffer);
// // приведем к строке
// const bufferStringified = myBuffer.toString();
// // Hi Node.js!
// console.log(bufferStringified, bufferStringified.length);


// stdin.once('data', (data) => {
//     const nameToStringg = data.toString();
//     const nameToString = data.toString().split();
//     console.log(nameToString, nameToStringg.length);
//     process.exit();
// })