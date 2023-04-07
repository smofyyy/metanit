import fs from "fs";
import path from "path";

const __dirname = path.resolve();

// fs.mkdirSync("sync_dir");
// fs.mkdir("async_dir", (err) => {
// });

// fs.writeFile("async_dir/hello.txt", "hello async_dir", "utf8", () => {
// })

// fs.appendFile("async_dir/hello.txt", " hello again async_dir", "utf8", () => {
// })

const writeFileAsync = async (path, text) => { 
    return new Promise((resolve, reject) => {
        fs.writeFile(path, text, "utf8", (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve();
        });
    });
}

const appendFileAsync = async (path, text) => { 
    return new Promise((resolve, reject) => {
        fs.appendFile(path, text, "utf8", (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve();
        });
    });
}

writeFileAsync("sync_dir/hello.txt", "hello sync_dir");

appendFileAsync("sync_dir/hello.txt", "\nhello again sync_dir");


// fs.mkdir("promise_dir", () => {

// });

writeFileAsync("promise_dir/hello.txt", "hello promise_dir")
    .then(() => appendFileAsync("promise_dir/hello.txt", "\nhello again"))
    .then(() => appendFileAsync("promise_dir/hello.txt", "\nand again"))
    .then(() => appendFileAsync("promise_dir/hello.txt", "\nand and again"))
    .catch(err => console.log(err.message))