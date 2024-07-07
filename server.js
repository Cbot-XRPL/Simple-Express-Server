const express = require('express')
const app = express()

app.use('/', express.static('../websites/Xahau-Eggs-Site'))

app.listen(8081)