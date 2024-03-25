const fs = require('fs')
const path = require('path')

module.exports = function(folder, fileExt, callback){

    fs.readdir(folder, (err, list) => {
        if(err) return callback(err) 

        list = list.filter((file) => {
            return path.extname(file) == '.' + fileExt
        })
        callback(null, list)
    })
}