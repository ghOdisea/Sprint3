const http = require('http')
const bl = require('bl')

const responses = []

function logResponses() {
    for( let j = 0; j < 3; j++){
        console.log(responses[j + 2])
    }
}

function getHttp (){
    for(let i = 2; i <= 4; i++){

        http.get(process.argv[i], (res) => {
            res.pipe(bl((err, data) => {

                if( err ) throw err

                responses[i] = data.toString()

                if(i == 2){
                    logResponses()
                }
            }))
        })
    }
}
getHttp()

/*
 # PASS Your solution to JUGGLING ASYNC passed!

 Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────       

    'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }

*/



