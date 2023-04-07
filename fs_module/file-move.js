import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const __dirname = path.resolve();

console.log(__dirname);
console.log(path.join(__dirname, "qwe", "zxc"));
console.log(__dirname);
console.log(path.join(__dirname, "..", ".."));
console.log(path.parse(__dirname));
console.log(path.basename(__dirname));


