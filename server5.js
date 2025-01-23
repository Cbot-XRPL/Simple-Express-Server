const express = require('express')
const app = express()

app.use('/', express.static('../websites/ta'))

app.listen(8084)