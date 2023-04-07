// Readable - чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

import fs from "fs";
import http from "http";

// fs.readFile("file.txt", (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data);
// })

const readableStream = fs.createReadStream("file1.txt")

readableStream.on('open', () => console.log('Начали читать'))

readableStream.on("data", (chunk) => {
    console.log(chunk);
})
readableStream.on('end', () => console.log('Закончили читать'))
// stream.on('error', (e) => console.log(e.message))


const writableStream = fs.createWriteStream("file2.txt")

for (let i = 0; i < 20; i++) {
    writableStream.write(i +"\n")
}

writableStream.end();


http.createServer((req, res) => {
    //req - readable stream
    //res - writable stream
    const stream = fs.createReadStream("file1.txt")

    stream.on("data", chunk => res.write(chunk)) 
    // происходит считывание по кусочкам и затем записывать в response, таким образом отправляем этот кусочек пользователю
    stream.on("end", chunk => res.end())
    // закончили читать файл и завершаем сетевое подключение с помощью response.end
    // НО
    // сетевое подключение значительно медленее чем чтение файла, и получается так что файл мы прочитали, сетевое подключение закончили
    // но пользовательно не успел выкачать весь файл

    // поэтому придуман метод pipe
    // stream.pipe(res)
    // благодаря нему мы достигаем синхронизации между readable и writable стримом
    // readable стрим не начинает читать новую порцию данных, пока writable стрим не закончил записывать предыдущую 
})