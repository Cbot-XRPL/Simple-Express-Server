const express = require('express')
const app = express()

app.use('/', express.static('../websites/cbot-labs'))

app.listen(8081)