import fs from "fs";

const firstFile = "read.txt";
const secondFile = "write.txt";
const onemoreFile = "append.txt";

// export const readFileSync = (data) => { 
//     console.log(fs.readFileSync(data, "utf8"));
// }

// readFileSync(firstFile);


export const readFile = () => {
    fs.readFile("read.txt", "utf8", (error, data) => {
        console.log(data);
    });
}

readFile(firstFile);

export const writeFile = (data) => {
    fs.writeFile(data, "я записал это в файл", () => {
        fs.readFile(data, "utf8", (err, text) => {console.log(text)});
    })
}

writeFile(secondFile);


fs.appendFile("append.txt", " дописал кое что", () => {
    fs.readFile("append.txt", "utf8", (err, text) => {console.log(text)});
});

