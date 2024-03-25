const fs = require('fs')
const stdout = process.argv[2]

let buf = fs.readFileSync(stdout)

const str = buf.toString()
console.log(str.split('\n').length - 1)