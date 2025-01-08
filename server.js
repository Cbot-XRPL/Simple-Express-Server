const express = require('express')
const app = express()

app.use('/', express.static('../websites/labs'))

app.listen(8081)