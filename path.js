import { basename, dirname } from "path";

let nomeArquivo = basename('./teste.txt');
let fileName =basename('/teste/something');

let dir = dirname('/teste/something');
let diretorio = dirname('/teste/something/filname.txt');

console.log(`Nome do arquivo${nomeArquivo}`);
console.log(` File Name${fileName}`);
console.log(`Dir${dir}`);
console.log(`Diretorio${diretorio}`);