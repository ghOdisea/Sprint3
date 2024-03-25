const fs = require('fs')
const stdout = process.argv[2]

//Para obtener un string directamente, le agrego el utf-8 como segundo argumento.
let buf = fs.readFile(stdout, (err, data) => {
    if(!err){
        const str = data.toString().split('\n').length - 1
        console.log(str)
    }else {
        throw err
    }
})
// console.log(buf)

// console.log(buf.length)