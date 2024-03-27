const http = require('http')
const url = require('url')
const portNumber = process.argv[2]
const path1 = '/api/parsetime'
const path2 = '/api/unixtime'
var URL 

//Dos posibles tipos de Path
//El 1 devuelve un query string con clave .iso y hora formato ISO.
//Creacion de funcion para devolver formato json 
const parseTime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
//El segundo devuelve UNIX epoch time en milisegundos, con clave .unixtime
//Funcion que devuelve json de UNIX time
const unixTime = (uTime) => {
    return { unixtime: uTime.getTime() }
}

//Seleccion del path del objeto url

const parseQuery = (url) => {
    switch (url.pathname){
        case (path1):
            return parseTime(new Date(url.query.iso))
            /*For example:
             /api/parsetime?'''''iso'''''=2013-08-10T12:10:15.474Z */
        case (path2):
            return unixTime(new Date(url.query.iso))
    default:
            return 'Date not valid'
    }
}
//Creacion de servidor 
const server = http.createServer((req, res) => {
    //Acepta solo metodo GET
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        //method 'url' acepta string y devuelve un objeto
        URL = url.parse((req.url), true)

        res.end(JSON.stringify(parseQuery(URL)))
    }else {
        throw Error('Use a GET method')
    }
})
server.listen(portNumber, () => {
    console.log('Server listening on port: '+ portNumber)
})


/*# PASS Your solution to HTTP JSON API SERVER passed!

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

    'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

─────────────────────────────────────────────────────────────────────────────
 You've finished all the challenges! Hooray! */