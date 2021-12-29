//GLOBALS - NO WINDOW!!!!

//_dirname  - path to current directory
//_filename - file name
// require  - function to use modules (CommonJS)
// module   - info about current module (file)
// process  - info about env where the program is being executed

let number = 0
setInterval(() => {
    console.log(`timer:${number}`)
    number = number + 1
}, 1000)