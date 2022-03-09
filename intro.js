// GLOBALS - NO WINDOW  
// __dirname - path to current directory
// __filename - path to current file
// require - function to use modules
// module - info about the current module (file)
// exports - object to export
//process - info about the env where the program is being executed.

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

setInterval(() => {
    console.log("Hello");
},1000);