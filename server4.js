const express = require('express')
const app = express()

app.use('/', express.static('../websites/local'))

app.listen(6969)