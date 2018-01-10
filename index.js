 console.log("hey jay 1")

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
var portNumber = 8080
app.listen(portNumber, () => console.log('Example app listening on port '+ portNumber + '!'))
