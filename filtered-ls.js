const fs = require('fs')
const path = process.argv[2]
const fileExt = "." + process.argv[3]

fs.readdir(path, (err, data) => {
    if(err){
        throw err
    }
    data.map((file) => {
        if(file.endsWith(fileExt)){
            console.log(file)
        }
    })
})