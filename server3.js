const express = require('express')
const app = express()

app.use('/', express.static('../websites/new-terra-service'))

app.listen(8083)