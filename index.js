
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
var portNumber = 9001
app.listen(portNumber, () => console.log('Example app listening on port '+ portNumber + '!'))