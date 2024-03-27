const portNumber = Number(process.argv[2])
const http = require('http')
const map = require('through2-map')


const server = http.createServer((req, res) => {
    if(req.method == 'POST'){
        res.writeHead(200, { 'content-type': 'text/plain' })

        req.pipe(map((data) => {
            return data.toString().toUpperCase()
          })).pipe(res)
    }else {
        console.log('Method is not POST.')
        throw Error('Use a POST method')
    }
    
})
server.listen(portNumber , () => {
    console.log('Server running on port : ' + portNumber)
})

/* # PASS Your solution to HTTP UPPERCASERER passed!

 Here's the official solution in case you want to compare notes:     

──────────────────────────────────────────────────────────────────── 

    'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
 */