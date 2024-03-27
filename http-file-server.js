const portNumber = Number(process.argv[2])
const fileLocation = process.argv[3].toString()
const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    fs.createReadStream(fileLocation).pipe(res)
})
server.listen(portNumber)

/*Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────── 

    'use strict'
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
 */