const express = require('express')
const app = express()

app.use('/', express.static('../websites/new-terra'))

app.listen(8082)