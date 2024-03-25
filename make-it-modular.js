const mymodule = require('./mymodule.js')
const folder = process.argv[2]
const fileExt = process.argv[3]
const callback = (err, list) => {
    if(err){console.log("There is an error")}

    list.forEach((file) => {
        console.log(file)
      })
    }
mymodule(folder, fileExt, callback)