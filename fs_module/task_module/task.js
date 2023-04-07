import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const textPath = `${__dirname}\\text.txt`;
const secondTextPath = `${__dirname}\\count.txt`;
const text = process.env.TEXT || "";
// const text = "этот текст был написан для задания";

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

const readFileAsync = async (path) => { 
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                return reject(err.message)
            }
            resolve(data);
        });
    });
}

const removeFileAsync = async (path) => { 
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve();
        });
    });
}

writeFileAsync(textPath, text)
    .then(() => readFileAsync(textPath))
    .then(data => data.split(" ").length)
    .then(count => writeFileAsync(secondTextPath, `${count}`))
    .then(() => removeFileAsync(textPath))
    .catch((err) => console.log(err));

// cross-env TEXT="1 2 3 4 5 6 asdasd sdf" node task.js