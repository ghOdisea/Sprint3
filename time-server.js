/*
    "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

    "2013-07-06 17:42"
*/

const net = require('net')
const portNumber = Number(process.argv[2])
const date = new Date()
const year = (date.getFullYear()).toString()
const month = (date.getMonth()+ 1 ).toString()
const day = (date.getDate()).toString()
const hours = (date.getHours()).toString()
const minutes = (date.getMinutes()).toString()

function zeroFill(number){
    if( number < 10 ){
        number = '0' + number
    }
    return number 
}

const fullDate = `${year}-${zeroFill(month)}-${zeroFill(day)} ${zeroFill(hours)}:${zeroFill(minutes)}` 

const server = net.createServer((socket) => {
    socket.end(fullDate + '\n')
  
})
server.listen(portNumber)